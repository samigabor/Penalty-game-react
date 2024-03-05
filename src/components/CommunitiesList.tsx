import { Box, Grid, Typography } from '@mui/material';

function CommunitiesList({ communities }: any) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Communities
      </Typography>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">Community Name</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">Community Symbol</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">Community Address</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" fontWeight="bold">Admin Address</Typography>
        </Grid>
      </Grid>
      {communities.map((community: any, index: number) => (
        <Grid key={index} container spacing={2} alignItems="center" sx={{ py: 1 }}>
          <Grid item xs={3}>
            <Typography variant="body1">{community.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">{community.symbol}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">{community.address}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">{community.admin}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default CommunitiesList;
