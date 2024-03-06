import { useConnect } from 'wagmi'
import { Box, Button, Stack, Typography } from '@mui/material';

function WalletConnector(): JSX.Element {
  const { connectors, connect, status, error } = useConnect()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h2">Connect</Typography>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            variant="contained"
            onClick={() => connect({ connector })}
            type="button"
            sx={{ borderRadius: '999px', width: '500px', height: '60px' }}
          >
            {connector.name}
          </Button>
        ))}
        <Typography>{status}</Typography>
        <Typography>{error?.message}</Typography>
      </Stack>
    </Box>
  );
}

export default WalletConnector;
