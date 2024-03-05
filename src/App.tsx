import { useState } from 'react';
import { useAccount } from 'wagmi';
import Navbar from './components/Navbar';
import WalletConnector from './components/WalletConnector';
import CommunityForm from './components/CommunityForm';
import MembersList from './components/MembersList';
import MemberForm from './components/MemberForm';
import TransferRequestForm from './components/TransferRequestForm';
import TransferRequestsList from './components/TransferRequestsList';

const defaultMembers = [
  { communityAddress: '0xabcdef', address: '0x123456', tokenId: '1' },
  { communityAddress: '0xabcdff', address: '0x123466', tokenId: '2' },
];

const defaultTransferRequests: { communityAddress: string, from: string, to: string, tokenId: string }[] = [];

function App() {
  const account = useAccount();
  const [members, setMembers] = useState(defaultMembers);
  const [transferRequests, setTransferRequests] = useState(defaultTransferRequests);
  // const [transfersInQueue, setTransfersInQueue] = useState(defaultTransferRequests);

  const addToCommunity = ({ memberAddress, communityAddress }: any) => {
    console.log("addToCommunity", { communityAddress, memberAddress });
    setMembers((prevMembers) => [...prevMembers, { communityAddress, address: memberAddress, tokenId: `${prevMembers.length + 1}` }]);
    // TODO: connect to wallet & send tx
  };

  const initiateTransferRequest = ({ communityAddress, toMemberAddress, tokenId }: any) => {
    console.log("initiateTransferRequest", { communityAddress, from: account.address, to: toMemberAddress, tokenId });
    setTransferRequests((prevRequests) => [...prevRequests, { communityAddress, from: account.address || "", to: toMemberAddress, tokenId }]);
    // TODO: connect to wallet & send tx
  };

  const approveTransferRequest = (transferRequest: any) => {
    console.log("approveTransferRequest", { transferRequest });
    setTransferRequests((prevRequests) => prevRequests.filter((request) => request?.tokenId !== transferRequest?.tokenId));
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
            <CommunityForm />
            <MemberForm addToCommunity={addToCommunity} />
            <TransferRequestForm initiateTransferRequest={initiateTransferRequest} />
            <TransferRequestsList transferRequests={transferRequests} approveTransferRequest={approveTransferRequest} />
            <MembersList members={members} removeFromCommunity={removeFromCommunity} />
          </div>
        ) : (
          <div>
            <WalletConnector />
          </div>
        )
      }
    </div>
  )
}

export default App
