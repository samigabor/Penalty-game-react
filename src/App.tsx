import { useState } from 'react';
import { useAccount } from 'wagmi';
import Navbar from './components/Navbar';
import ConnectWallet from './components/ConnectWallet';
import CreateCommunity from './components/CreateCommunity';
import CommunityMembers from './components/CommunityMembers';
import AddMemberToCommunity from './components/AddMemberToCommunity';

const defaultMembers = [
  { address: '0x123456789abcdef', communityAddress: '0x123456789abcdef', tokenId: '123' },
  { address: '0x123456789abcdef', communityAddress: '0x987654321abcdef', tokenId: '456' },
];

function App() {
  const account = useAccount();
  const [members, setMembers] = useState(defaultMembers);

  const addToCommunity = ({ memberAddress, communityAddress, tokenId }: any) => {
    console.log("addToCommunity", { communityAddress, memberAddress, tokenId });
    setMembers((prevMembers) => [...prevMembers, { address: memberAddress, communityAddress, tokenId }]);
    // TODO: connect to wallet & send tx
  };

  const removeFromCommunity = (memberToRemove: any) => {
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member.address !== memberToRemove.address)
    );
    // TODO: connect to wallet & send tx
  };

  return (
    <div>
      {account.status === 'connected'
        ? (
          <div>
            <Navbar />
            <CreateCommunity />
            <AddMemberToCommunity addToCommunity={addToCommunity} />
            <CommunityMembers members={members} removeFromCommunity={removeFromCommunity} />
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
