import { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

import { abi } from '../abis/communityRegistry';
import { isValidAddress } from '../helpers';
import { COMMUNITY_REGISTRY_ADDRESS } from '../constants';

function TransferRequestForm({ initiateTransferRequest }: any) {
  const { data: hash, writeContract } = useWriteContract();

  const [communityAddress, setCommunityAddress] = useState('');
  const [toMemberAddress, setToMemberAddress] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (!isValidAddress(communityAddress) || !isValidAddress(toMemberAddress)) {
      alert('Community Address or Member Address provided is incorrect!');
      return;
    }

    writeContract({
      address: COMMUNITY_REGISTRY_ADDRESS,
      abi,
      functionName: 'initiateTransferRequest',
      args: [communityAddress as `0x${string}`, toMemberAddress as `0x${string}`, BigInt(tokenId)],
    })

    initiateTransferRequest({ communityAddress, toMemberAddress, tokenId });
  };

  return (
    <Box sx={{ py: 4 }}>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Transfer My Token
            </Typography>
            <Typography variant="h6" gutterBottom>
              Initiate a transfer request. Approval needed from other community member. {hash && <div>Transaction Hash: {hash}</div>}
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px' }}>
              Transfer
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Community Address"
              variant="outlined"
              value={communityAddress}
              onChange={(e) => setCommunityAddress(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Member Address"
              variant="outlined"
              value={toMemberAddress}
              onChange={(e) => setToMemberAddress(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Token ID"
              variant="outlined"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default TransferRequestForm;
