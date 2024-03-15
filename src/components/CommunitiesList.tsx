import { useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { Box, Grid, Typography } from '@mui/material';

import { abi } from '../abis/communityRegistry';
import { COMMUNITY_REGISTRY_ADDRESS } from '../constants';
import { Community } from '../types';

function CommunitiesList({ communities, setCommunities }: { communities: Community[], setCommunities: any }) {

  const { data } = useReadContract({
    abi,
    address: COMMUNITY_REGISTRY_ADDRESS,
    functionName: 'getCommunities',
  })

  useEffect(() => {
    if (data && data[0]) {
      const communityAddressed = data[0];
      const communityNames = data[1];
      const communitySymbols = data[2];
      const communityAdmins = data[3];
      const allCommunities = [];
      for (let i = 0; i < communityAddressed.length; i++) {
        allCommunities.push({ name: communityNames[i], symbol: communitySymbols[i], address: communityAddressed[i], admin: communityAdmins[i] });
      }
      setCommunities(allCommunities);
    }
  }, [data])

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Communities
      </Typography>
      <Grid container spacing={2} sx={{ py: 1 }}>
        <Grid item xs={2}>
          <Typography variant="body1" fontWeight="bold">Community Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" fontWeight="bold">Community Symbol</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" fontWeight="bold">Community Address</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" fontWeight="bold">Admin Address</Typography>
        </Grid>
      </Grid>
      {communities.length
        ? communities.map((community: Community, index: number) => (
          <Grid key={index} container spacing={2} alignItems="center" sx={{ py: 1 }}>
            <Grid item xs={2}>
              <Typography variant="body1">{community.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">{community.symbol}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">{community.address}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">{community.admin}</Typography>
            </Grid>
          </Grid>
        ))
        : <Typography variant="body1">No communities were created</Typography>
      }
    </Box>
  );
}

export default CommunitiesList;
