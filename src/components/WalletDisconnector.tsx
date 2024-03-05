import { useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { Toolbar, Button } from '@mui/material'

function WalletDisconnector(): JSX.Element {
  const account = useAccount()
  const { disconnect } = useDisconnect()
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Button
          key="disconnect"
          variant="contained"
          onClick={() => disconnect()}
          type="button"
          sx={{ borderRadius: '999px', width: '140px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? 'Disconnect' : `${account.address?.slice(0, 6)}…${account.address?.slice(38, 42)}`}
        </Button>
      </Toolbar>
    </div>
  );
}

export default WalletDisconnector;
