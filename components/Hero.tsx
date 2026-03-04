import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="gradient-bg py-20 text-center">
      <h1 className="text-5xl font-bold text-secondary">Your AI-Powered Hub for Base Network</h1>
      <p className="text-xl text-muted-foreground mt-4">Track trending tokens, AI agents, yields & risks in real-time on Base</p>
      <div className="mt-8 space-x-4">
        <Button variant="default">Connect Wallet</Button>
        <Button variant="outline">Chat with AI</Button>
      </div>
    </section>
  );
}
