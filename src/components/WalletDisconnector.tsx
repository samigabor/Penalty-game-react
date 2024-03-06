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
          sx={{ borderRadius: '999px', width: '500px', height: '60px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? 'Disconnect' : `Chain Name: ${account.chain?.name} / Chain Id: ${account.chainId} ${account.address}`}
        </Button>
      </Toolbar>
    </div>
  );
}

export default WalletDisconnector;
