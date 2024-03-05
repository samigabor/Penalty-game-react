import { AppBar, Toolbar } from '@mui/material';
import WalletDisconnector from './WalletDisconnector';

function Navbar(): JSX.Element {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <WalletDisconnector />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
