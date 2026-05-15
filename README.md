# Realtime Trading Dashboard - AI Powered

IMPORTANT DISCLAIMER: The market data surfaced by this project may be delayed, incomplete, or incorrect. Do NOT rely on it for trading or investment decisions. Use this project for research, testing, or demonstration only.

This project is a minimal realtime trading dashboard scaffold (client + server) using:

- React + Vite + Tailwind CSS
- Express + WebSocket relay server
- Finnhub WebSocket as market data source
- TradingView Lightweight Charts

Quick start:

1. Install dependencies

```bash
npm install
```

2. Start dev servers (two terminals) or run concurrently:

```bash
npm run dev:server
npm run dev:client
```

Or in one terminal (requires `concurrently`):

```bash
npm run dev
```

3. Open the client at `http://localhost:5173` and the server runs on `:4000`.

Notes:
- The server connects to Finnhub WebSocket and relays trade messages to connected browser clients. The Finnhub token can be set via `FINNHUB_TOKEN` environment variable.
- This is a scaffold — extend charts, search, watchlist persistence, and UI polish as needed.
# Fundamental Stock Radar

A premium, zero-dependency NSE/BSE stock-ranking web app focused on transparent fundamentals scoring, conservative entry timing, and a polished research-style interface.

## What it does

- Ranks strong NSE and BSE stocks in descending order by score out of 100
- Shows the reason behind each score
- Adds a simple entry timing tag for every stock
- Supports exchange, sector, and market-cap filters
- Includes a small compare view and a focused detail panel
- Pulls live Alpha Vantage price data and 5-year return for the selected and compared stocks

## Run locally

Open `index.html` in your browser.

## Notes

- The current dataset is seeded for the first version of the app.
- Alpha Vantage powers live tracking for price and 5-year return, using the provided API key.
- The UI is structured so more live market data can be added later without redesigning the app.
- This app is for research and education only, not investment advice.
