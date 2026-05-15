const express = require('express')
const http = require('http')
const axios = require('axios')
const WebSocket = require('ws')

const FINNHUB_TOKEN = process.env.FINNHUB_TOKEN || 'd839iuhr01qjsh1knl90d839iuhr01qjsh1knl9g'
const FINNHUB_URL = `wss://ws.finnhub.io?token=${FINNHUB_TOKEN}`

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

let fhSocket = null
let subscriptions = new Set()
let latest = {}
const quoteCache = new Map() // symbol -> { price, ts }
const fiveYearCache = new Map() // symbol -> { pct, ts, from, to }
const FIVE_YEAR_TTL = 24 * 60 * 60 * 1000 // 24h
const QUOTE_TTL = 30 * 1000 // 30s

const FINNHUB_REST = 'https://finnhub.io/api/v1'

async function fetchQuoteREST(symbol){
  const now = Date.now()
  const cached = quoteCache.get(symbol)
  if(cached && (now - cached.ts) < QUOTE_TTL) return cached
  try{
    const url = `${FINNHUB_REST}/quote?symbol=${encodeURIComponent(symbol)}&token=${FINNHUB_TOKEN}`
    const r = await axios.get(url, { timeout: 5000 })
    if(r.data && typeof r.data.c === 'number'){
      const payload = {
        price: r.data.c,
        change: typeof r.data.d === 'number' ? r.data.d : null,
        changePercent: typeof r.data.dp === 'number' ? r.data.dp : null,
        high: typeof r.data.h === 'number' ? r.data.h : null,
        low: typeof r.data.l === 'number' ? r.data.l : null,
        open: typeof r.data.o === 'number' ? r.data.o : null,
        prevClose: typeof r.data.pc === 'number' ? r.data.pc : null,
        ts: now,
      }
      quoteCache.set(symbol, payload)
      return payload
    }
  }catch(e){ console.error('REST quote error', e && e.message) }
  return null
}

async function fetchFiveYearReturn(symbol){
  const now = Date.now()
  const cached = fiveYearCache.get(symbol)
  if(cached && (now - cached.ts) < FIVE_YEAR_TTL) return cached.pct
  try{
    const to = Math.floor(now/1000)
    const fiveYearsAgo = now - Math.round(5 * 365.25 * 24 * 60 * 60 * 1000)
    const from = Math.floor(fiveYearsAgo/1000)
    const url = `${FINNHUB_REST}/stock/candle?symbol=${encodeURIComponent(symbol)}&resolution=M&from=${from}&to=${to}&token=${FINNHUB_TOKEN}`
    const r = await axios.get(url, { timeout: 10000 })
    if(r.data && r.data.s === 'ok' && Array.isArray(r.data.c) && r.data.c.length >= 2){
      const closes = r.data.c
      const oldest = closes[0]
      const latestClose = closes[closes.length-1]
      const pct = ((latestClose / oldest) - 1) * 100
      fiveYearCache.set(symbol, { pct, ts: now, from, to })
      return pct
    }
  }catch(e){ console.error('REST 5y error', e && e.message) }
  return null
}

function connectFinnhub(){
  console.log('Connecting to Finnhub...')
  fhSocket = new WebSocket(FINNHUB_URL)
  fhSocket.on('open', ()=>{
    console.log('Connected to Finnhub')
    // resubscribe
    subscriptions.forEach(sym=> fhSocket.send(JSON.stringify({type:'subscribe', symbol: sym})))
  })
  fhSocket.on('message', (data)=>{
    try{
      const msg = JSON.parse(data)
      if(msg.type === 'trade' && Array.isArray(msg.data)){
        msg.data.forEach(t=>{
          latest[t.s] = t
          // broadcast to all clients
          const out = JSON.stringify({ type: 'trade', symbol: t.s, p: t.p, t: t.t })
          wss.clients.forEach(c=> { if(c.readyState === WebSocket.OPEN) c.send(out) })
        })
      }
    }catch(e){ console.error('fh parse', e) }
  })
  fhSocket.on('close', ()=>{ console.log('Finnhub closed, reconnect in 2s'); setTimeout(connectFinnhub,2000) })
  fhSocket.on('error', (e)=>{ console.error('Finnhub err', e) })
}

connectFinnhub()

wss.on('connection', (ws)=>{
  console.log('client connected')
  // send cache
  ws.send(JSON.stringify({ type: 'cache', data: latest }))
  ws.on('message', (msg)=>{
    try{
      const m = JSON.parse(msg)
      if(m.action === 'subscribe' && m.symbol){
        subscriptions.add(m.symbol)
        if(fhSocket && fhSocket.readyState === WebSocket.OPEN) fhSocket.send(JSON.stringify({type:'subscribe', symbol: m.symbol}))
      }
      if(m.action === 'unsubscribe' && m.symbol){
        subscriptions.delete(m.symbol)
        if(fhSocket && fhSocket.readyState === WebSocket.OPEN) fhSocket.send(JSON.stringify({type:'unsubscribe', symbol: m.symbol}))
      }
    }catch(e){ console.error(e) }
  })
})

app.get('/api/latest', (req,res)=>{
  res.json(latest)
})

// get best current quote: prefer websocket cache, fall back to REST
app.get('/api/quote', async (req,res)=>{
  const symbol = req.query.symbol
  if(!symbol) return res.status(400).json({ error: 'symbol required' })
  const fromWs = latest[symbol]
  if(fromWs && typeof fromWs.p === 'number'){
    return res.json({
      symbol,
      price: fromWs.p,
      change: null,
      changePercent: null,
      source: 'ws',
    })
  }
  const q = await fetchQuoteREST(symbol)
  if(q !== null) return res.json({ symbol, ...q, source: 'rest' })
  return res.status(503).json({ error: 'no data' })
})

// compute and return 5-year return percent (cached)
app.get('/api/5y', async (req,res)=>{
  const symbol = req.query.symbol
  if(!symbol) return res.status(400).json({ error: 'symbol required' })
  const pct = await fetchFiveYearReturn(symbol)
  if(pct === null) return res.status(503).json({ error: 'no data' })
  return res.json({ symbol, fiveYearReturnPercent: pct })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, ()=> console.log('Server listening on', PORT))
