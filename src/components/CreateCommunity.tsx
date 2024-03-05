import { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';

function CreateCommunity() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');

  const deployCommunityToken = (event: any) => {
    event.preventDefault();
    console.log("deployCommunityToken", { tokenName, tokenSymbol });
    // TODO: connect to wallet & deploy contract
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Community
      </Typography>
      <form onSubmit={deployCommunityToken}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Community Name"
              variant="outlined"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Community Symbol"
              variant="outlined"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button type="submit" variant="contained" color="primary">
              Create Community
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default CreateCommunity;
