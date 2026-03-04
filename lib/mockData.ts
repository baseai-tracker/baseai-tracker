export const mockTokens = [
  {
    rank: 1,
    logo: 'https://placeholder.co/32x32',
    name: 'Base Token',
    symbol: 'BASE',
    price: 0.05,
    change5m: 1.2,
    change1h: 5.4,
    change6h: -2.3,
    change24h: 12.5,
    volume: 1200000,
    marketCap: 50000000,
    sparklineData: [0.04, 0.045, 0.05, 0.048, 0.05], // For Recharts
    aiHype: true,
  },
  // Add 9 more similar objects for demo
  ...Array.from({ length: 9 }, (_, i) => ({
    rank: i + 2,
    logo: 'https://placeholder.co/32x32',
    name: `Token ${i + 2}`,
    symbol: `TKN${i + 2}`,
    price: Math.random() * 0.1,
    change5m: (Math.random() - 0.5) * 10,
    change1h: (Math.random() - 0.5) * 20,
    change6h: (Math.random() - 0.5) * 30,
    change24h: (Math.random() - 0.5) * 50,
    volume: Math.random() * 2000000,
    marketCap: Math.random() * 100000000,
    sparklineData: Array.from({ length: 5 }, () => Math.random() * 0.1),
    aiHype: Math.random() > 0.5,
  })),
];

export const mockInsights = [
  { title: 'Hot AI Agent: $AIXBT +120% 24h', description: 'Rising due to new protocol.' },
  { title: 'Whale Alert', description: 'Large buy on Aerodrome.' },
  { title: 'Risk Watch', description: 'High volatility in memecoins.' },
  { title: 'Yield Opportunity', description: 'Farm on Base DeFi.' },
];

export const mockPortfolio = [
  { asset: 'BASE', balance: 1000, value: 500, pnl: 20 },
  // Add more
];

export const mockTokenDetails = (address: string) => ({
  logo: 'https://placeholder.co/64x64',
  name: 'Sample Token',
  symbol: 'SAMP',
  price: 0.05,
  change24h: 12.5,
  liquidity: 1000000,
  fdv: 50000000,
  holders: 5000,
  tx24h: 10000,
  aiSummary: 'This token pumped due to Virtuals Protocol AI agent launch. Bullish sentiment 85%, risk medium.',
  riskScore: 65,
  holdersData: [40, 30, 20, 10], // Pie chart
  transactions: [{ id: 'tx1', amount: 100, from: '0x...', to: '0x...' }], // List
  sentiment: { positive: 70, neutral: 20, negative: 10 }, // Bar
});
