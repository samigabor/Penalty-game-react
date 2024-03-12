import { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

import { abi } from '../abis/communityRegistry';
import { COMMUNITY_REGISTRY_ADDRESS } from '../constants';

function CommunityForm({ createCommunity }: any) {
  const { data: hash, writeContract } = useWriteContract();

  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const tokenName = formData.get('tokenName') as string
    const tokenSymbol = formData.get('tokenSymbol') as string

    writeContract({
      address: COMMUNITY_REGISTRY_ADDRESS,
      abi,
      functionName: 'deployCommunityContract',
      args: [tokenName, tokenSymbol],
    })

    createCommunity({ name: tokenName, symbol: tokenSymbol });
  };

  return (
    <Box sx={{ py: 4 }}>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Create New Community
            </Typography>
            <Typography variant="h6" gutterBottom>
              Deploy community contract. {hash && <div>Transaction Hash: {hash}</div>}
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px' }}>
              Create
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Community Name"
              name="tokenName"
              variant="outlined"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Token Symbol"
              name="tokenSymbol"
              variant="outlined"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default CommunityForm;
