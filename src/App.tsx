import { useAccount } from 'wagmi';
import Navbar from './components/Navbar';
import ConnectWallet from './components/ConnectWallet';
import CreateCommunity from './components/CreateCommunity';

function App() {
  const account = useAccount();

  return (
    <div>
      {account.status === 'connected'
        ? (
          <div>
            <Navbar />
            <CreateCommunity />
          </div>
        ) : (
          <div>
            <ConnectWallet />
          </div>
          )
      }
    </div>
  )
}

export default App
