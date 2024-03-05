import { AppBar, Toolbar } from '@mui/material';
import DisconnectWallet from './DisconnectWallet';

function Navbar(): JSX.Element {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
                <DisconnectWallet />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
