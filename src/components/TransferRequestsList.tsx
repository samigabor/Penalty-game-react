import { Box, Button, Grid, Typography } from '@mui/material';

function TransferRequestsList({ transferRequests, approveTransferRequest }: any) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pending Transfer Requests
      </Typography>
      <Grid container spacing={2} alignItems="center" sx={{ py: 1 }}>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">Community Address</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">From</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">To</Typography>
        </Grid>
        <Grid item xs={2} textAlign="center">
          <Typography variant="body1" fontWeight="bold">Token ID</Typography>
        </Grid>
        <Grid item xs={1} textAlign="right">
          <Typography variant="body1" fontWeight="bold">Actions</Typography>
        </Grid>
      </Grid>
      {transferRequests.length
        ? transferRequests.map((transferRequest: any, index: number) => (
          <Grid key={index} container spacing={2} alignItems="center" sx={{ py: 1 }}>
            <Grid item xs={3}>
              <Typography variant="body1">{transferRequest.communityAddress}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">{transferRequest.from}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">{transferRequest.to}</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Typography variant="body1">{transferRequest.tokenId}</Typography>
            </Grid>
            <Grid item xs={1} textAlign="right">
              <Button
                variant="contained"
                onClick={() => approveTransferRequest(transferRequest)}
                sx={{ width: '100px' }}
              >
                Approve
              </Button>
            </Grid>
          </Grid>
        ))
        : <Typography variant="body1">No pending transfers (not yet implemented)</Typography>
      }
    </Box>

  );
}

export default TransferRequestsList;
