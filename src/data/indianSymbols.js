const instruments = [
  {
    name: 'Asian Paints',
    symbol: 'ASIANPAINT.NS',
    aliases: ['asian paints', 'asian paint', 'asianpaint', 'asianpaints'],
  },
  {
    name: 'Reliance Industries',
    symbol: 'RELIANCE.NS',
    aliases: ['reliance', 'reliance industries', 'reliance ind', 'ril'],
  },
  {
    name: 'Tata Consultancy Services',
    symbol: 'TCS.NS',
    aliases: ['tcs', 'tata consultancy services'],
  },
  {
    name: 'Infosys',
    symbol: 'INFY.NS',
    aliases: ['infosys', 'infy'],
  },
  {
    name: 'HDFC Bank',
    symbol: 'HDFCBANK.NS',
    aliases: ['hdfc bank', 'hdfcbank'],
  },
  {
    name: 'ICICI Bank',
    symbol: 'ICICIBANK.NS',
    aliases: ['icici bank', 'icicibank'],
  },
  {
    name: 'State Bank of India',
    symbol: 'SBIN.NS',
    aliases: ['sbi', 'state bank of india', 'sbin'],
  },
  {
    name: 'Bharti Airtel',
    symbol: 'BHARTIARTL.NS',
    aliases: ['bharti airtel', 'airtel'],
  },
  {
    name: 'ITC',
    symbol: 'ITC.NS',
    aliases: ['itc'],
  },
]

const normalize = (value) => String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '')

const lookupBySymbol = new Map(instruments.map((item) => [normalize(item.symbol), item]))
const lookupByName = new Map(
  instruments.flatMap((item) => [
    [normalize(item.name), item],
    ...item.aliases.map((alias) => [normalize(alias), item]),
  ])
)

export function resolveIndianSymbol(input) {
  const normalized = normalize(input)
  if (!normalized) return null

  const directSymbol = lookupBySymbol.get(normalized)
  if (directSymbol) return directSymbol

  const byName = lookupByName.get(normalized)
  if (byName) return byName

  if (normalized.endsWith('ns') || normalized.endsWith('bo')) {
    const withDots = normalized.replace(/(ns|bo)$/, '.$1').toUpperCase()
    return { name: String(input).trim(), symbol: withDots }
  }

  return {
    name: String(input).trim(),
    symbol: `${String(input).trim().toUpperCase().replace(/\s+/g, '')}.NS`,
  }
}

export function getInstrumentLabel(symbol) {
  const found = lookupBySymbol.get(normalize(symbol))
  return found ? found.name : symbol
}

export const defaultIndianSymbols = instruments
