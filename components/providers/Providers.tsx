'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { base } from 'wagmi/chains';
import { PropsWithChildren } from 'react';

const config = getDefaultConfig({
  appName: 'BaseAI Tracker',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Replace with your WalletConnect ID
  chains: [base],
});

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
    }
