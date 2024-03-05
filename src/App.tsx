import { useAccount } from 'wagmi'
import Navbar from './components/Navbar';
import ConnectWallet from './components/ConnectWallet';

function App() {
  const account = useAccount()

  return (
    <div>
      {account.status === 'connected'
        ? (
          <Navbar />
        ) : (
          <ConnectWallet />
        )
      }
    </div>
  )
}

export default App
