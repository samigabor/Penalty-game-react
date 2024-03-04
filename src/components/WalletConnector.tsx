import { AppBar, Toolbar, Box, Button, Stack, Typography } from '@mui/material';
import { useAccount, useConnect, useDisconnect } from 'wagmi'


function WalletConnector(): JSX.Element {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        <div>

            {account.status === 'connected'
                ? (
                    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <Toolbar sx={{ justifyContent: 'flex-end' }}>
                            {/* <Typography>{status}</Typography> */}
                            <Button
                                key="disconnect"
                                variant="outlined"
                                type="button"
                                sx={{ borderRadius: '999px', mr: 1 }}
                            >
                                {`${account.address.slice(0, 6)}…${account.address.slice(38, 42)}`}
                            </Button>
                            <Button
                                key="disconnect"
                                variant="contained"
                                onClick={() => disconnect()}
                                type="button"
                                sx={{ borderRadius: '999px' }}
                            >
                                Disconnect
                            </Button>
                        </Toolbar>
                        <Typography>{error?.message}</Typography>
                    </AppBar>
                ) : (
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
                                    sx={{ borderRadius: '999px', width: '300px' }}
                                >
                                    {connector.name}
                                </Button>
                            ))}
                            <Typography>{status}</Typography>
                            <Typography>{error?.message}</Typography>
                        </Stack>
                    </Box>
                )
            }
        </div>
    );
}

export default WalletConnector;
