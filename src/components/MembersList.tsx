import { Box, Button, Grid, Typography } from '@mui/material';

function MembersList({ members, removeFromCommunity }: any) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Community Members
      </Typography>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={5}>
          <Typography variant="body1" fontWeight="bold">Community Address</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" fontWeight="bold">Member Address</Typography>
        </Grid>
        <Grid item xs={1} textAlign="center">
          <Typography variant="body1" fontWeight="bold">Token ID</Typography>
        </Grid>
        <Grid item xs={1} textAlign="right">
          <Typography variant="body1" fontWeight="bold">Actions</Typography>
        </Grid>
      </Grid>
      {members.map((member: any, index: number) => (
        <Grid key={index} container spacing={2} alignItems="center" sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Typography variant="body1">{member.communityAddress}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">{member.address}</Typography>
          </Grid>
          <Grid item xs={1} textAlign="center">
            <Typography variant="body1">{member.tokenId}</Typography>
          </Grid>
          <Grid item xs={1} textAlign="right">
            <Button
              variant="contained"
              color="error"
              onClick={() => removeFromCommunity(member)}
              sx={{ width: '100px' }}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>

  );
}

export default MembersList;
