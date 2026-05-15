const stockUniverse = [
  {
    symbol: 'BAJFINANCE',
    name: 'Bajaj Finance',
    exchange: 'NSE',
    sector: 'Financial Services',
    marketCap: 'Large Cap',
    score: 93,
    entryTag: 'Pullback zone',
    rationale: 'High-growth lending with strong profitability and proven execution keeps this among the strongest fundamentals names.',
    highlights: ['High growth engine', 'Execution quality', 'Strong margins'],
    valuation: 78,
    profitability: 96,
    growth: 92,
    debt: 84,
    stability: 90,
    price: 6890,
    change1D: 0.6,
    pe: 33.8,
    roe: 24.9,
    fiveYearReturn: 312,
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    exchange: 'NSE',
    sector: 'IT Services',
    marketCap: 'Large Cap',
    score: 94,
    entryTag: 'Pullback zone',
    rationale: 'High-quality cash generation, strong margins, and resilient long-term demand keep it near the top of the model.',
    highlights: ['Low debt', 'Consistent ROE', 'Strong free cash flow'],
    valuation: 86,
    profitability: 95,
    growth: 84,
    debt: 96,
    stability: 93,
    price: 3898,
    change1D: 0.8,
    pe: 29.4,
    roe: 51.2,
    fiveYearReturn: 214,
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel',
    exchange: 'NSE',
    sector: 'Telecom',
    marketCap: 'Large Cap',
    score: 91,
    entryTag: 'Breakout watch',
    rationale: 'Earnings momentum, pricing discipline, and network leadership support a high ranking in the model.',
    highlights: ['Pricing power', 'Network scale', 'Earnings momentum'],
    valuation: 80,
    profitability: 89,
    growth: 91,
    debt: 82,
    stability: 89,
    price: 1778,
    change1D: 1.2,
    pe: 40.7,
    roe: 24.4,
    fiveYearReturn: 178,
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank',
    exchange: 'NSE',
    sector: 'Banking',
    marketCap: 'Large Cap',
    score: 92,
    entryTag: 'Support accumulation',
    rationale: 'A balanced mix of franchise strength, asset quality, and earnings durability keeps the score elevated.',
    highlights: ['Stable liability franchise', 'Asset quality focus', 'Broad retail moat'],
    valuation: 82,
    profitability: 91,
    growth: 87,
    debt: 89,
    stability: 94,
    price: 1682,
    change1D: 0.5,
    pe: 20.6,
    roe: 18.4,
    fiveYearReturn: 92,
  },
  {
    symbol: 'INFY',
    name: 'Infosys',
    exchange: 'NSE',
    sector: 'IT Services',
    marketCap: 'Large Cap',
    score: 89,
    entryTag: 'Breakout watch',
    rationale: 'Strong digital transformation exposure and a clean balance sheet make this a dependable fundamentals pick.',
    highlights: ['Dividend strength', 'Global client base', 'Healthy margins'],
    valuation: 85,
    profitability: 88,
    growth: 79,
    debt: 97,
    stability: 91,
    price: 1628,
    change1D: 1.1,
    pe: 28.8,
    roe: 33.7,
    fiveYearReturn: 146,
  },
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    exchange: 'NSE',
    sector: 'Conglomerate',
    marketCap: 'Large Cap',
    score: 91,
    entryTag: 'Wait for confirmation',
    rationale: 'Diversified earnings engines, scale advantages, and optionality across energy and retail support the rating.',
    highlights: ['Diversified businesses', 'Scale moat', 'Strategic optionality'],
    valuation: 74,
    profitability: 87,
    growth: 90,
    debt: 78,
    stability: 88,
    price: 2940,
    change1D: 0.3,
    pe: 23.1,
    roe: 9.7,
    fiveYearReturn: 126,
  },
  {
    symbol: 'LT',
    name: 'Larsen & Toubro',
    exchange: 'NSE',
    sector: 'Capital Goods',
    marketCap: 'Large Cap',
    score: 90,
    entryTag: 'Breakout watch',
    rationale: 'Execution quality, order book visibility, and infrastructure exposure support a strong score.',
    highlights: ['Order book strength', 'Execution discipline', 'Infrastructure cycle'],
    valuation: 81,
    profitability: 86,
    growth: 88,
    debt: 83,
    stability: 92,
    price: 3572,
    change1D: 1.4,
    pe: 36.8,
    roe: 17.9,
    fiveYearReturn: 248,
  },
  {
    symbol: 'SBIN',
    name: 'State Bank of India',
    exchange: 'NSE',
    sector: 'Banking',
    marketCap: 'Large Cap',
    score: 88,
    entryTag: 'Support accumulation',
    rationale: 'Scale, improving profitability, and balance-sheet strength make it a leading public-sector bank pick.',
    highlights: ['Improving asset quality', 'Scale leadership', 'Operating leverage'],
    valuation: 87,
    profitability: 84,
    growth: 82,
    debt: 85,
    stability: 89,
    price: 810,
    change1D: 0.9,
    pe: 11.8,
    roe: 19.1,
    fiveYearReturn: 165,
  },
  {
    symbol: 'ITC',
    name: 'ITC',
    exchange: 'NSE',
    sector: 'FMCG',
    marketCap: 'Large Cap',
    score: 87,
    entryTag: 'Pullback zone',
    rationale: 'Defensive cash generation, low leverage, and diversification keep it attractive for fundamentals-first investors.',
    highlights: ['Cash-rich business', 'Defensive profile', 'Low leverage'],
    valuation: 88,
    profitability: 82,
    growth: 76,
    debt: 96,
    stability: 90,
    price: 462,
    change1D: 0.2,
    pe: 28.7,
    roe: 28.3,
    fiveYearReturn: 138,
  },
  {
    symbol: 'ASIANPAINT',
    name: 'Asian Paints',
    exchange: 'NSE',
    sector: 'Consumer',
    marketCap: 'Large Cap',
    score: 86,
    entryTag: 'Wait for confirmation',
    rationale: 'Strong brand equity and pricing power remain positive, though the model is a bit more cautious on valuation.',
    highlights: ['Brand moat', 'Pricing power', 'Strong distribution'],
    valuation: 73,
    profitability: 88,
    growth: 75,
    debt: 95,
    stability: 92,
    price: 2976,
    change1D: -0.4,
    pe: 61.3,
    roe: 31.5,
    fiveYearReturn: 121,
  },
  {
    symbol: 'HINDUNILVR',
    name: 'Hindustan Unilever',
    exchange: 'BSE',
    sector: 'FMCG',
    marketCap: 'Large Cap',
    score: 85,
    entryTag: 'Support accumulation',
    rationale: 'Defensive compounding, pricing power, and resilience through cycles keep it a strong fundamentals candidate.',
    highlights: ['Consumer staple moat', 'Defensive cash flows', 'Brand depth'],
    valuation: 70,
    profitability: 87,
    growth: 74,
    debt: 96,
    stability: 93,
    price: 2392,
    change1D: 0.1,
    pe: 54.2,
    roe: 21.8,
    fiveYearReturn: 88,
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors',
    exchange: 'NSE',
    sector: 'Automobile',
    marketCap: 'Large Cap',
    score: 84,
    entryTag: 'Breakout watch',
    rationale: 'Improving earnings mix and strategic position in EV and commercial vehicles support a favorable momentum overlay.',
    highlights: ['Improving cycle', 'EV optionality', 'JLR recovery'],
    valuation: 79,
    profitability: 78,
    growth: 87,
    debt: 70,
    stability: 80,
    price: 1021,
    change1D: 1.8,
    pe: 13.4,
    roe: 21.6,
    fiveYearReturn: 203,
  },
].sort((left, right) => right.score - left.score);

const state = {
  exchange: 'All',
  sector: 'All',
  marketCap: 'All',
  selectedSymbol: stockUniverse[0].symbol,
  compare: ['TCS', 'HDFCBANK'],
};

const ui = {
  topScore: document.getElementById('topScore'),
  resultCount: document.getElementById('resultCount'),
  bestTag: document.getElementById('bestTag'),
  highConviction: document.getElementById('highConviction'),
  averageScore: document.getElementById('averageScore'),
  bestTiming: document.getElementById('bestTiming'),
  liveFeedStatus: document.getElementById('liveFeedStatus'),
  resultBadge: document.getElementById('resultBadge'),
  exchangeFilter: document.getElementById('exchangeFilter'),
  sectorFilter: document.getElementById('sectorFilter'),
  marketCapFilter: document.getElementById('marketCapFilter'),
  rankingList: document.getElementById('rankingList'),
  selectedName: document.getElementById('selectedName'),
  selectedScoreBadge: document.getElementById('selectedScoreBadge'),
  selectedRationale: document.getElementById('selectedRationale'),
  selectedExchange: document.getElementById('selectedExchange'),
  selectedSector: document.getElementById('selectedSector'),
  selectedPrice: document.getElementById('selectedPrice'),
  selectedPe: document.getElementById('selectedPe'),
  selectedFiveYearReturn: document.getElementById('selectedFiveYearReturn'),
  selectedLiveSource: document.getElementById('selectedLiveSource'),
  selectedBars: document.getElementById('selectedBars'),
  selectedHighlights: document.getElementById('selectedHighlights'),
  compareSelected: document.getElementById('compareSelected'),
  compareList: document.getElementById('compareList'),
  compareSummary: document.getElementById('compareSummary'),
};

const exchanges = ['All', 'NSE', 'BSE'];
const sectors = ['All', ...new Set(stockUniverse.map((stock) => stock.sector))];
const marketCaps = ['All', ...new Set(stockUniverse.map((stock) => stock.marketCap))];
const ALPHA_VANTAGE_API_KEY = 'U3HYFXDX7KMEKQGR';
const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';
const liveCache = new Map();
const liveRequests = new Map();

function liveSymbolCandidates(stock) {
  if (stock.exchange === 'NSE') {
    return [`${stock.symbol}.NSE`, `${stock.symbol}.BSE`];
  }

  if (stock.exchange === 'BSE') {
    return [`${stock.symbol}.BSE`, `${stock.symbol}.NSE`];
  }

  return [`${stock.symbol}.BSE`, `${stock.symbol}.NSE`];
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

function getLiveValue(stock, key, fallback) {
  return stock[key] ?? fallback;
}

function scoreTone(score) {
  if (score >= 92) return 'linear-gradient(135deg, #8df0b2, #46d0ff)';
  if (score >= 88) return 'linear-gradient(135deg, #46d0ff, #62b0ff)';
  if (score >= 82) return 'linear-gradient(135deg, #ffdf74, #ffb74d)';
  return 'linear-gradient(135deg, #ff8aa0, #ff627e)';
}

function scoreLabel(score) {
  if (score >= 92) return 'Elite';
  if (score >= 88) return 'Strong';
  if (score >= 82) return 'Solid';
  return 'Watchlist';
}

function byScore(a, b) {
  return b.score - a.score;
}

function currency(value) {
  return `₹${value.toLocaleString('en-IN')}`;
}

function livePrice(stock) {
  return getLiveValue(stock, 'livePrice', stock.price);
}

function liveChange(stock) {
  return getLiveValue(stock, 'liveChange1D', stock.change1D);
}

function liveFiveYearReturn(stock) {
  return getLiveValue(stock, 'liveFiveYearReturn', stock.fiveYearReturn);
}

function liveUpdatedLabel(stock) {
  return stock.liveUpdatedAt ? `Updated ${stock.liveUpdatedAt}` : 'Seed data';
}

async function fetchAlphaVantageJson(functionName, symbol) {
  const url = `${ALPHA_VANTAGE_BASE_URL}?function=${functionName}&symbol=${encodeURIComponent(symbol)}&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const response = await fetch(url);
  return response.json();
}

async function fetchWithFallback(functionName, stock, expectedKey) {
  for (const symbol of liveSymbolCandidates(stock)) {
    const data = await fetchAlphaVantageJson(functionName, symbol);
    if (data?.Information || data?.Note || data?.['Error Message']) {
      if (data?.Note) {
        throw new Error(data.Note);
      }
      continue;
    }
    if (expectedKey && !data?.[expectedKey]) {
      continue;
    }
    return data;
  }
  throw new Error(`No Alpha Vantage data for ${stock.symbol}`);
}

function parseFiveYearReturn(monthlySeries) {
  const dates = Object.keys(monthlySeries).sort((left, right) => new Date(right) - new Date(left));
  if (dates.length < 2) {
    return null;
  }

  const latestDate = dates[0];
  const latestClose = Number(monthlySeries[latestDate]['5. adjusted close']);
  const targetDate = new Date(latestDate);
  targetDate.setFullYear(targetDate.getFullYear() - 5);

  const startDate = dates.find((date) => new Date(date) <= targetDate) ?? dates[dates.length - 1];
  const startClose = Number(monthlySeries[startDate]['5. adjusted close']);

  if (!Number.isFinite(latestClose) || !Number.isFinite(startClose) || startClose === 0) {
    return null;
  }

  return Math.round(((latestClose - startClose) / startClose) * 100);
}

async function getLiveMetrics(stock) {
  if (liveCache.has(stock.symbol)) {
    return liveCache.get(stock.symbol);
  }

  if (liveRequests.has(stock.symbol)) {
    return liveRequests.get(stock.symbol);
  }

  const request = (async () => {
    const quoteData = await fetchWithFallback('GLOBAL_QUOTE', stock, 'Global Quote');
    const quote = quoteData?.['Global Quote'] ?? {};
    const price = Number(quote['05. price']);
    const change = Number(quote['10. change percent']?.replace('%', ''));
    const latestTradingDay = quote['07. latest trading day'] ?? null;

    return {
      livePrice: Number.isFinite(price) ? price : stock.price,
      liveChange1D: Number.isFinite(change) ? change : stock.change1D,
      liveFiveYearReturn: stock.fiveYearReturn,
      liveUpdatedAt: latestTradingDay ?? '',
      liveQuoteSymbol: quote['01. symbol'] ?? '',
    };
  })().finally(() => {
    liveRequests.delete(stock.symbol);
  });

  liveRequests.set(stock.symbol, request);
  const metrics = await request;
  liveCache.set(stock.symbol, metrics);
  return metrics;
}

async function syncLiveMetrics(stocks) {
  if (!stocks.length) {
    ui.liveFeedStatus.textContent = 'Alpha Vantage sync idle';
    return;
  }

  ui.liveFeedStatus.textContent = 'Syncing live prices...';
  for (const stock of stocks) {
    try {
      const metrics = await getLiveMetrics(stock);
      Object.assign(stock, metrics);
      ui.liveFeedStatus.textContent = `Live for ${stock.symbol}`;
      updateView();
    } catch (error) {
      ui.liveFeedStatus.textContent = 'Live sync limited by API';
    }
  }
}

function queueLiveSync(symbols = [state.selectedSymbol]) {
  const liveTargets = Array.from(new Set(symbols))
    .map((symbol) => stockUniverse.find((stock) => stock.symbol === symbol))
    .filter(Boolean);

  void syncLiveMetrics(liveTargets);
}

function renderSelect(select, options, current) {
  select.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join('');
  select.value = current;
}

function filteredStocks() {
  return stockUniverse.filter((stock) => {
    const exchangeMatch = state.exchange === 'All' || stock.exchange === state.exchange;
    const sectorMatch = state.sector === 'All' || stock.sector === state.sector;
    const capMatch = state.marketCap === 'All' || stock.marketCap === state.marketCap;
    return exchangeMatch && sectorMatch && capMatch;
  });
}

function selectedStock(list = filteredStocks()) {
  return list.find((stock) => stock.symbol === state.selectedSymbol) ?? list[0] ?? stockUniverse[0];
}

function isCompared(symbol) {
  return state.compare.includes(symbol);
}

function toggleCompare(symbol) {
  if (isCompared(symbol)) {
    state.compare = state.compare.filter((item) => item !== symbol);
    return;
  }
  if (state.compare.length >= 3) {
    state.compare = [...state.compare.slice(1), symbol];
    return;
  }
  state.compare = [...state.compare, symbol];
}

function renderKpis(list) {
  const top = list[0];
  const average = list.length
    ? (list.reduce((total, stock) => total + stock.score, 0) / list.length).toFixed(1)
    : '0.0';
  const strongCount = list.filter((stock) => stock.score >= 90).length;
  const best = top?.entryTag ?? '--';

  ui.topScore.textContent = top ? `${top.score}/100` : '--';
  ui.resultCount.textContent = `${list.length} names`;
  ui.bestTag.textContent = best;
  ui.highConviction.textContent = String(strongCount);
  ui.averageScore.textContent = average;
  ui.bestTiming.textContent = selectedStock(list).entryTag;
  ui.resultBadge.textContent = `${list.length} results`;
  ui.liveFeedStatus.textContent = top?.liveUpdatedAt ? `Live update ${top.liveUpdatedAt}` : 'Alpha Vantage sync pending';
}

function renderRanking(list) {
  ui.rankingList.innerHTML = list
    .map((stock, index) => {
      const compared = isCompared(stock.symbol);
      const selected = stock.symbol === state.selectedSymbol;
      return `
        <button class="stock-row" data-symbol="${stock.symbol}" type="button" aria-pressed="${selected}">
          <div class="rank-chip" style="background: ${scoreTone(stock.score)}">${index + 1}</div>
          <div>
            <div class="stock-title">
              <strong>${stock.name}</strong>
              <span class="pill">${stock.symbol}</span>
              <span class="pill">${stock.exchange}</span>
              <span class="pill price-pill">${currency(livePrice(stock))}</span>
            </div>
            <p class="muted">${stock.sector} • ${stock.marketCap}</p>
          </div>
          <div>
            <p class="muted">Rating</p>
            <strong>${stock.score}</strong>
            <p class="muted">${scoreLabel(stock.score)}</p>
          </div>
          <div class="ranking-row-entry">
            <p class="muted">Entry timing</p>
            <strong>${stock.entryTag}</strong>
            <p class="muted">${stock.rationale}</p>
          </div>
          <div class="ranking-row-change" style="text-align: right;">
            <span class="compare-pill">${compared ? 'In compare' : 'Compare'}</span>
            <div class="return-stack">
              <div>
                <p class="muted">1D</p>
                <strong style="color: ${liveChange(stock) >= 0 ? 'var(--lime)' : 'var(--rose)'};">${liveChange(stock) >= 0 ? '+' : ''}${liveChange(stock).toFixed(1)}%</strong>
              </div>
              <div>
                <p class="muted">5Y return</p>
                <strong style="color: var(--accent);">${liveFiveYearReturn(stock) >= 0 ? '+' : ''}${liveFiveYearReturn(stock)}%</strong>
              </div>
            </div>
          </div>
        </button>
      `;
    })
    .join('');
}

function renderSelected(stock) {
  ui.selectedName.textContent = stock.name;
  ui.selectedScoreBadge.textContent = `${stock.score}/100`;
  ui.selectedScoreBadge.style.background = scoreTone(stock.score);
  ui.selectedScoreBadge.style.color = '#07101b';
  ui.selectedRationale.textContent = stock.rationale;
  ui.selectedExchange.textContent = stock.exchange;
  ui.selectedSector.textContent = stock.sector;
  ui.selectedPrice.textContent = currency(livePrice(stock));
  ui.selectedPe.textContent = stock.pe.toFixed(1);
  ui.selectedFiveYearReturn.textContent = `${liveFiveYearReturn(stock) >= 0 ? '+' : ''}${liveFiveYearReturn(stock)}%`;
  ui.selectedLiveSource.textContent = stock.liveQuoteSymbol ? `${stock.liveQuoteSymbol} • ${liveUpdatedLabel(stock)}` : liveUpdatedLabel(stock);
  ui.selectedBars.innerHTML = [
    ['Profitability', stock.profitability],
    ['Growth', stock.growth],
    ['Debt quality', stock.debt],
    ['Stability', stock.stability],
  ]
    .map(
      ([label, value]) => `
        <div>
          <div class="bar-label"><span>${label}</span><span>${value}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width: ${value}%"></div></div>
        </div>
      `,
    )
    .join('');
  ui.selectedHighlights.innerHTML = stock.highlights.map((item) => `<span class="pill">${item}</span>`).join('');
  ui.compareSelected.textContent = isCompared(stock.symbol) ? 'Remove from compare' : 'Add to compare';
}

function renderCompare(list) {
  const compareStocks = stockUniverse.filter((stock) => state.compare.includes(stock.symbol));
  ui.compareList.innerHTML = compareStocks
    .map(
      (stock) => `
        <button class="compare-row" data-compare="${stock.symbol}" type="button">
          <div class="compare-name">
            <strong>${stock.symbol}</strong>
            <span>${stock.name}</span>
          </div>
          <div style="text-align: right;">
            <strong>${stock.score}/100</strong>
            <span>${stock.entryTag}</span>
          </div>
        </button>
      `,
    )
    .join('');

  ui.compareSummary.innerHTML = compareStocks
    .map(
      (stock) => `
        <article class="summary-card">
          <div class="summary-top">
            <div>
              <strong>${stock.symbol}</strong>
              <span>${stock.name}</span>
            </div>
            <div class="score-badge" style="background: ${scoreTone(stock.score)}; color: #07101b;">${stock.score}</div>
          </div>
          <div class="info-grid" style="margin-top: 16px;">
            <div class="info-tile"><span>Rating</span><strong>${stock.score}/100</strong></div>
            <div class="info-tile"><span>Entry</span><strong>${stock.entryTag}</strong></div>
            <div class="info-tile"><span>ROE</span><strong>${stock.roe.toFixed(1)}%</strong></div>
            <div class="info-tile"><span>P/E</span><strong>${stock.pe.toFixed(1)}</strong></div>
            <div class="info-tile"><span>5Y return</span><strong>${liveFiveYearReturn(stock) >= 0 ? '+' : ''}${liveFiveYearReturn(stock)}%</strong></div>
          </div>
        </article>
      `,
    )
    .join('');
}

function updateView() {
  const list = filteredStocks();
  const ordered = [...list].sort(byScore);
  const currentSelected = selectedStock(ordered);
  state.selectedSymbol = currentSelected.symbol;

  renderKpis(ordered);
  renderRanking(ordered);
  renderSelected(currentSelected);
  renderCompare(ordered);
}

renderSelect(ui.exchangeFilter, exchanges, state.exchange);
renderSelect(ui.sectorFilter, sectors, state.sector);
renderSelect(ui.marketCapFilter, marketCaps, state.marketCap);

ui.exchangeFilter.addEventListener('change', (event) => {
  state.exchange = event.target.value;
  updateView();
});

ui.sectorFilter.addEventListener('change', (event) => {
  state.sector = event.target.value;
  updateView();
});

ui.marketCapFilter.addEventListener('change', (event) => {
  state.marketCap = event.target.value;
  updateView();
});

ui.rankingList.addEventListener('click', (event) => {
  const row = event.target.closest('.stock-row');
  if (!row) return;
  state.selectedSymbol = row.dataset.symbol;
  updateView();
  queueLiveSync([state.selectedSymbol]);
});

ui.compareList.addEventListener('click', (event) => {
  const row = event.target.closest('.compare-row');
  if (!row) return;
  toggleCompare(row.dataset.compare);
  updateView();
  queueLiveSync([row.dataset.compare]);
});

ui.compareSelected.addEventListener('click', () => {
  toggleCompare(state.selectedSymbol);
  updateView();
  queueLiveSync([state.selectedSymbol]);
});

updateView();
queueLiveSync([state.selectedSymbol]);
