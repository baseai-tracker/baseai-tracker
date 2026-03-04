import { Navbar } from "@/components/Navbar";
import { mockTokenDetails } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { AIChat } from "@/components/AIChat";
import { Progress } from "@/components/ui/progress"; // For gauge, use Progress as gauge

export default function TokenDetail({ params }: { params: { address: string } }) {
  const details = mockTokenDetails(params.address);
  // In real: Use Wagmi or fetch from Moralis/DexScreener for Base data

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <header className="flex items-center space-x-4">
          <img src={details.logo} alt={details.name} className="w-16 h-16" />
          <div>
            <h1 className="text-4xl font-bold">{details.name} ({details.symbol})</h1>
            <p className="text-2xl">${details.price.toFixed(4)}</p>
          </div>
        </header>
        {/* Live chart: Use Recharts OHLC */}
        <ResponsiveContainer width="100%" height={300} className="mt-6">
          <BarChart data={[{ name: 'OHLC', open: 0.04, high: 0.06, low: 0.03, close: 0.05 }]}>
            {/* Simple mock OHLC; extend with real data */}
            <Bar dataKey="close" fill="#00d4ff" />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-5 gap-4 mt-4 text-center">
          <div>Change: <span className="text-green-500">{details.change24h}%</span></div>
          <div>Liquidity: ${details.liquidity.toLocaleString()}</div>
          <div>FDV: ${details.fdv.toLocaleString()}</div>
          <div>Holders: {details.holders}</div>
          <div>24h Tx: {details.tx24h}</div>
        </div>
        <Card className="mt-6 card-neumorphic">
          <CardContent>
            <h2 className="text-2xl font-bold">AI Summary</h2>
            <p>{details.aiSummary}</p>
            <div className="mt-4">
              <p>AI Risk Score:</p>
              <Progress value={details.riskScore} className="w-full" />
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="holders" className="mt-6">
          <TabsList>
            <TabsTrigger value="holders">Holders</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="sentiment">Social Sentiment</TabsTrigger>
          </TabsList>
          <TabsContent value="holders">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={details.holdersData.map((v, i) => ({ name: `Group ${i}`, value: v }))} dataKey="value" fill="#a855f7" />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="transactions">
            <ul>{details.transactions.map(tx => <li key={tx.id}>{tx.amount} from {tx.from} to {tx.to}</li>)}</ul>
          </TabsContent>
          <TabsContent value="sentiment">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[{ name: 'Sentiment', positive: details.sentiment.positive, neutral: details.sentiment.neutral, negative: details.sentiment.negative }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="positive" fill="green" />
                <Bar dataKey="neutral" fill="yellow" />
                <Bar dataKey="negative" fill="red" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </main>
      <AIChat />
    </>
  );
      }
