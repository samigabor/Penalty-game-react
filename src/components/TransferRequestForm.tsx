import { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

function TransferRequestForm({ initiateTransferRequest }: any) {
  const [communityAddress, setCommunityAddress] = useState('');
  const [toMemberAddress, setToMemberAddress] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("TransferRequestForm.handleOnSubmit:", { communityAddress, toMemberAddress, tokenId })
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
              Initiate a transfer request. Approval needed from other community member.
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
