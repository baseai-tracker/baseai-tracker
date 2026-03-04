'use client';

import { Navbar } from "@/components/Navbar";
import { mockPortfolio } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { useAccount } from 'wagmi';
import { AIChat } from "@/components/AIChat";

export default function Portfolio() {
  const { address, isConnected } = useAccount();

  // In real: Use Wagmi hooks for balances on Base, e.g., useBalance()
  const portfolio = isConnected ? mockPortfolio : [];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        {!isConnected ? (
          <p>Connect wallet to view portfolio.</p>
        ) : (
          <>
            <p>Connected: {address}</p>
            <ResponsiveContainer width="100%" height={300} className="mt-6">
              <PieChart>
                <Pie data={portfolio.map(p => ({ name: p.asset, value: p.value }))} dataKey="value" fill="#00d4ff" />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {portfolio.map((item, i) => (
                <Card key={i} className="card-neumorphic">
                  <CardContent>
                    <h3>{item.asset}</h3>
                    <p>Balance: {item.balance}</p>
                    <p>Value: ${item.value}</p>
                    <p>PNL: {item.pnl}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-6 card-neumorphic">
              <CardContent>
                <h2>AI Advisor</h2>
                <p>Recommendation: Add yield on Aerodrome.</p>
              </CardContent>
            </Card>
          </>
        )}
      </main>
      <AIChat />
    </>
  );
}
