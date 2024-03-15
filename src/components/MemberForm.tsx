import { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { useWriteContract } from 'wagmi';
import { COMMUNITY_REGISTRY_ADDRESS } from '../constants';
import { abi } from '../abis/communityRegistry';


function MemberForm({ addToCommunity }: any) {
  const { data: hash, writeContract } = useWriteContract();
  
  const [communityAddress, setCommunityAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (!isValidAddress(communityAddress) || !isValidAddress(memberAddress)) {
      alert('Community Address or Member Address provided is incorrect!');
      return;
    }

    writeContract({
      address: COMMUNITY_REGISTRY_ADDRESS,
      abi,
      functionName: 'mintTokenToMember',
      args: [communityAddress as `0x${string}`, memberAddress as `0x${string}`],
    })

    addToCommunity({ communityAddress, memberAddress });
  };

  const isValidAddress = (address: string) => {
    return address.startsWith('0x') && address.length === 42;
  }

  return (
    <Box sx={{ py: 4 }}>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Add Member To Community
            </Typography>
            <Typography variant="h6" gutterBottom>
              Mint community token and assign member to community. {hash && <div>Transaction Hash: {hash}</div>}
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px' }}>
              Add
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
              value={memberAddress}
              onChange={(e) => setMemberAddress(e.target.value)}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default MemberForm;
