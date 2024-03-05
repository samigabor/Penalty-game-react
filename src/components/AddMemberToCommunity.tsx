import { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

function AddMemberToCommunity({ addToCommunity }: any) {
  const [communityAddress, setCommunityAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("AddMemberToCommunity.handleOnSubmit:", { communityAddress, memberAddress, tokenId })
    addToCommunity({ communityAddress, memberAddress, tokenId });
  };

  return (
    <Box sx={{ py: 6 }}>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              Add Member To Community
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

export default AddMemberToCommunity;
