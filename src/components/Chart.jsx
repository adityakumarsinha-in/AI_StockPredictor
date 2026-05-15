import React, { useEffect, useRef } from 'react'
import { createChart } from 'lightweight-charts'

const formatPrice = (value)=> {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
  return `₹${Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
}

const formatSignedPct = (value)=> {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
  const num = Number(value)
  return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`
}

export default function Chart({ selectedName, selectedSymbol, selectedQuote }){
  const ref = useRef()
  const chartRef = useRef()
  const seriesRef = useRef()

  useEffect(()=>{
    chartRef.current = createChart(ref.current, { width: ref.current.clientWidth, height: 400, layout: { backgroundColor: '#111827', textColor: '#d1d5db' } })
    seriesRef.current = chartRef.current.addCandlestickSeries()
    chartRef.current.timeScale().fitContent()
    const handleResize = ()=> chartRef.current.applyOptions({ width: ref.current.clientWidth })
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(()=>{
    if(!seriesRef.current || !selectedQuote || !Number.isFinite(Number(selectedQuote.price))) return
    const price = Number(selectedQuote.price)
    const now = Math.floor(Date.now()/1000)
    const base = Math.max(price * 0.01, 1)
    seriesRef.current.update({
      time: now,
      open: price - base * 0.25,
      high: price + base * 0.5,
      low: price - base * 0.75,
      close: price,
    })
  }, [selectedQuote, selectedSymbol])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4 rounded bg-gray-700/40 px-3 py-2 text-sm text-gray-300">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Chart</div>
          <div className="font-medium">{selectedName}</div>
          <div className="text-xs text-gray-500">{selectedSymbol}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Live price</div>
          <div className="font-semibold">{formatPrice(selectedQuote?.price)}</div>
          <div className="text-xs text-gray-400">{formatSignedPct(selectedQuote?.changePercent)} today</div>
        </div>
      </div>
      <div ref={ref} className="w-full" />
    </div>
  )
}
