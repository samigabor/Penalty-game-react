import { http, createConfig } from 'wagmi'
import { polygon, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected/*, walletConnect */ } from 'wagmi/connectors'

export const config = createConfig({
  chains: [polygon, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [polygon.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
