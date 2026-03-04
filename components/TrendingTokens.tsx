import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockTokens } from "@/lib/mockData";
import { TokenCard } from "./TokenCard";
import { useState } from "react";

export function TrendingTokens() {
  const [filter, setFilter] = useState('All');

  // Mock filtering; in real, fetch from DexScreener API: fetch(`https://api.dexscreener.com/latest/dex/search?q=base ${filter}`)
  const filteredTokens = mockTokens; // Implement logic

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4">Trending Tokens</h2>
      <Tabs defaultValue="All" className="mb-6">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="AI Agents">AI Agents</TabsTrigger>
          <TabsTrigger value="Memecoins">Memecoins</TabsTrigger>
          <TabsTrigger value="DeFi">DeFi</TabsTrigger>
          <TabsTrigger value="New">New (last 24h)</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTokens.map((token, i) => <TokenCard key={i} token={token} />)}
      </div>
    </section>
  );
}
