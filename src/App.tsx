import { useState } from 'react';
import { useAccount } from 'wagmi';

import Navbar from './components/Navbar';
import WalletConnector from './components/WalletConnector';
import CommunityForm from './components/CommunityForm';
import MembersList from './components/MembersList';
import MemberForm from './components/MemberForm';
import TransferRequestForm from './components/TransferRequestForm';
import TransferRequestsList from './components/TransferRequestsList';
import CommunitiesList from './components/CommunitiesList';

import { Community, Member, TransferRequest } from './types';



function App() {
  const account = useAccount();

  const [members, setMembers] = useState([] as Member[]);
  const [communities, setCommunities] = useState([] as Community[]);
  const [transferRequests, setTransferRequests] = useState([] as TransferRequest[]);

  const createCommunity = ({ name, symbol }: { name: string, symbol: string }) => {
    setCommunities((prevCommunities) => [...prevCommunities, { name, symbol, token: "0x...", admin: account.address || "0x..." }]);
  };

  const addToCommunity = ({ memberAddress, communityAddress }: { memberAddress: string, communityAddress: string }) => {
    setMembers((prevMembers) => [...prevMembers, { communityAddress, address: memberAddress, tokenId: prevMembers.length + 1 }]);
  };

  const initiateTransferRequest = ({ communityAddress, toMemberAddress, tokenId }: { communityAddress: string, toMemberAddress: string, tokenId: string }) => {
    console.log("initiateTransferRequest", { communityAddress, from: account.address, to: toMemberAddress, tokenId });
    setTransferRequests((prevRequests) => [...prevRequests, { communityAddress, from: account.address || "0x...", to: toMemberAddress, tokenId }]);
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
            <CommunityForm createCommunity={createCommunity} />
            <CommunitiesList communities={communities} setCommunities={setCommunities} />
            <MemberForm addToCommunity={addToCommunity} />
            <MembersList members={members} setMembers={setMembers} removeFromCommunity={removeFromCommunity} />
            <TransferRequestForm initiateTransferRequest={initiateTransferRequest} />
            <TransferRequestsList transferRequests={transferRequests} approveTransferRequest={approveTransferRequest} />
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
