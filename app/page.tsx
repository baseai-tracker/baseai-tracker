import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrendingTokens } from "@/components/TrendingTokens";
import { AIInsights } from "@/components/AIInsights";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrendingTokens />
        <AIInsights />
      </main>
      <AIChat />
    </>
  );
}
