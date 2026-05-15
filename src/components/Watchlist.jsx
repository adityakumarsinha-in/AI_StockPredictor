import React, { useEffect, useMemo, useState } from 'react'
import { getInstrumentLabel, resolveIndianSymbol } from '../data/indianSymbols'

const defaultList = ['RELIANCE.NS','TCS.NS','INFY.NS']

export default function Watchlist({ ws, latest, onSelect, selectedSymbol }){
  const [list, setList] = useState(defaultList)
  const [q, setQ] = useState('')
  const [quotes, setQuotes] = useState({})

  const sortedList = useMemo(()=> {
    return [...list].sort((a, b) => {
      const priceA = Number(quotes[a]?.price ?? -Infinity)
      const priceB = Number(quotes[b]?.price ?? -Infinity)
      if (priceA === priceB) return getInstrumentLabel(a).localeCompare(getInstrumentLabel(b))
      return priceB - priceA
    })
  }, [list, quotes])

  const refreshQuotes = async (symbols)=>{
    const entries = await Promise.all(symbols.map(async (symbol)=>{
      try{
        const res = await fetch(`/api/quote?symbol=${encodeURIComponent(symbol)}`)
        const json = await res.json()
        return [symbol, res.ok ? json : null]
      }catch{
        return [symbol, null]
      }
    }))
    setQuotes(prev=>{
      const next = { ...prev }
      for(const [symbol, quote] of entries){
        if(quote) next[symbol] = quote
      }
      return next
    })
  }

  useEffect(()=>{
    refreshQuotes(list)
    const timer = setInterval(()=> refreshQuotes(list), 30000)
    return ()=> clearInterval(timer)
  }, [list])

  const subscribe = (symbol)=>{
    if(ws && ws.readyState === WebSocket.OPEN){
      ws.send(JSON.stringify({ action: 'subscribe', symbol }))
    }
  }

  const unsubscribe = (symbol)=>{
    if(ws && ws.readyState === WebSocket.OPEN){
      ws.send(JSON.stringify({ action: 'unsubscribe', symbol }))
    }
  }

  const add = ()=>{
    if(!q) return
    const resolved = resolveIndianSymbol(q)
    const s = resolved ? resolved.symbol : q.toUpperCase()
    setList(prev=> prev.includes(s) ? prev : [s, ...prev])
    setQ('')
    subscribe(s)
  }

  return (
    <div className="bg-gray-800 rounded p-4">
      <h2 className="font-semibold mb-2">Sorted list</h2>
      <div className="flex gap-2 mb-3">
        <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 px-2 py-1 rounded bg-gray-700" placeholder="Symbol e.g. RELIANCE.NS" />
        <button onClick={add} className="px-3 py-1 bg-indigo-600 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {sortedList.map(s=>{
          const quote = quotes[s]
          const price = quote ? quote.price : '—'
          const change = quote ? quote.changePercent : null
          const label = getInstrumentLabel(s)
          return (
            <li key={s} className={`flex items-center justify-between bg-gray-700 p-2 rounded ${selectedSymbol === s ? 'ring-2 ring-indigo-500' : ''}`}>
              <div className="min-w-0">
                <button className="font-medium text-left block truncate" onClick={()=> onSelect && onSelect(s)}>{label}</button>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="font-semibold">{price}</span>
                  <span className="text-gray-500">{s}</span>
                  {change !== null && change !== undefined ? <span className="text-gray-400">({change >= 0 ? '+' : ''}{Number(change).toFixed(2)}%)</span> : null}
                </div>
              </div>
              <div className="space-x-2">
                <button onClick={()=>{ onSelect && onSelect(s); subscribe(s) }} className="px-2 py-1 bg-green-600 rounded text-sm">Live</button>
                <button onClick={()=>unsubscribe(s)} className="px-2 py-1 bg-red-600 rounded text-sm">Stop</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
