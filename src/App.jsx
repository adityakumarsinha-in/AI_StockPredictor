import React, { useEffect, useMemo, useRef, useState } from 'react'
import Chart from './components/Chart'
import Watchlist from './components/Watchlist'
import { getInstrumentLabel, resolveIndianSymbol } from './data/indianSymbols'

export default function App(){
  const [ws, setWs] = useState(null)
  const [latest, setLatest] = useState({})
  const [selectedSymbol, setSelectedSymbol] = useState('ASIANPAINT.NS')
  const [selectedQuote, setSelectedQuote] = useState(null)
  const [selectedFiveYear, setSelectedFiveYear] = useState(null)
  const [quoteStatus, setQuoteStatus] = useState('loading')
  const wsRef = useRef(null)

  const normalizedSymbol = useMemo(()=> selectedSymbol.trim().toUpperCase(), [selectedSymbol])
  const selectedName = useMemo(()=> getInstrumentLabel(normalizedSymbol), [normalizedSymbol])

  const formatPct = (value)=> {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
    const num = Number(value)
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`
  }

  const formatPrice = (value)=> {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
    return `₹${Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
  }

  const formatSignedPct = (value)=> {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
    const num = Number(value)
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`
  }

  const setResolvedSymbol = (value)=> {
    const resolved = resolveIndianSymbol(value)
    if (resolved && resolved.symbol) {
      setSelectedSymbol(resolved.symbol)
    }
  }

  useEffect(()=>{
    const url = (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.hostname + ':4000'
    const socket = new WebSocket(url)
    wsRef.current = socket
    socket.onopen = ()=> console.log('connected to local ws')
    socket.onmessage = (ev)=>{
      try{
        const msg = JSON.parse(ev.data)
        if(msg.type === 'trade'){
          setLatest(prev=>({...prev, [msg.symbol]: msg}))
        } else if (msg.type === 'cache' && msg.data) {
          setLatest(prev=>({...prev, ...msg.data}))
        }
      }catch(e){console.error(e)}
    }
    socket.onclose = ()=> setTimeout(()=>{ setWs(new WebSocket(url)) }, 2000)
    setWs(socket)
    return ()=> socket.close()
  }, [])

  useEffect(()=>{
    const controller = new AbortController()
    async function loadSelected(){
      if(!normalizedSymbol) return
      setQuoteStatus('loading')
      try{
        const [quoteRes, fiveYearRes] = await Promise.all([
          fetch(`/api/quote?symbol=${encodeURIComponent(normalizedSymbol)}`, { signal: controller.signal }),
          fetch(`/api/5y?symbol=${encodeURIComponent(normalizedSymbol)}`, { signal: controller.signal })
        ])

        const quoteJson = await quoteRes.json().catch(()=>null)
        const fiveYearJson = await fiveYearRes.json().catch(()=>null)

        if(quoteRes.ok && quoteJson){
          setSelectedQuote(quoteJson)
          setQuoteStatus(quoteJson.source === 'ws' ? 'live websocket quote' : 'rest quote')
        } else {
          setSelectedQuote(null)
          setQuoteStatus('quote unavailable')
        }

        if(fiveYearRes.ok && fiveYearJson){
          setSelectedFiveYear(fiveYearJson)
        } else {
          setSelectedFiveYear(null)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setQuoteStatus('quote unavailable')
          setSelectedQuote(null)
          setSelectedFiveYear(null)
        }
      }
    }

    loadSelected()
    const timer = setInterval(loadSelected, 15000)
    return ()=>{
      controller.abort()
      clearInterval(timer)
    }
  }, [normalizedSymbol])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="p-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Realtime Trading Dashboard</h1>
          <div className="text-sm text-gray-400">Market: NSE / BSE — Live via Finnhub (server)</div>
        </div>
        <div className="max-w-6xl mx-auto mt-3">
          <div className="rounded-md bg-yellow-600/10 border border-yellow-700 text-yellow-200 px-4 py-2 text-sm">
            <strong className="font-semibold">Disclaimer:</strong> This app uses data that may not match the current market data. The figures may be delayed, incomplete, or incorrect. Do not rely on this application for trading or investment decisions. Use for research and demonstration only.
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4 grid grid-cols-3 gap-4">
        <section className="col-span-2 bg-gray-800 rounded p-4">
          <div className="mb-3 rounded bg-gray-700/60 px-4 py-3 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Selected stock</div>
              <div className="text-lg font-semibold">{selectedName}</div>
              <div className="text-xs text-gray-500">{normalizedSymbol}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Live price</div>
              <div className="text-2xl font-semibold">{formatPrice(selectedQuote?.price)}</div>
              <div className="text-sm text-gray-300">{formatSignedPct(selectedQuote?.changePercent)} today</div>
            </div>
          </div>
          <Chart selectedName={selectedName} selectedSymbol={normalizedSymbol} selectedQuote={selectedQuote} />
        </section>
        <aside className="col-span-1 space-y-4">
          <div className="bg-gray-800 rounded p-4 space-y-3">
            <div>
              <div className="text-sm text-gray-400">Selected symbol</div>
              <div className="text-lg font-semibold">{selectedName}</div>
              <div className="text-xs text-gray-500">{normalizedSymbol}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded bg-gray-700 p-3">
                <div className="text-xs text-gray-400">Current price</div>
                <div className="text-xl font-semibold">{formatPrice(selectedQuote?.price)}</div>
              </div>
              <div className="rounded bg-gray-700 p-3">
                <div className="text-xs text-gray-400">Daily change</div>
                <div className="text-xl font-semibold">{formatSignedPct(selectedQuote?.changePercent)}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded bg-gray-700 p-3">
                <div className="text-xs text-gray-400">5Y return</div>
                <div className="text-xl font-semibold">{formatPct(selectedFiveYear?.fiveYearReturnPercent)}</div>
              </div>
            </div>
            <div className="text-xs text-gray-400">Quote source: {quoteStatus}. If this looks wrong, treat it as untrusted and do not rely on it.</div>
          </div>
          <Watchlist ws={wsRef.current} latest={latest} onSelect={setResolvedSymbol} selectedSymbol={normalizedSymbol} />
        </aside>
      </main>
    </div>
  )
}
