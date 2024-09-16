## Penalty Game

Front-end application managing community tokens enables:
- creation of tokens associated with communities
- administration of community memberships by a designated admin
- token transfers between members with an approval mechanism

### User Authentication

Simple authentication mechanism to identify users (e.g. Metamask integration for wallet-based authentication)

### Community and Member Management Interface

- allows the admin to add or remove members from the community
- displays a list of current members within a community

### Token Management Interface

- community members can request token transfers to another member or to the pool
- members can approve transfer requests initiated by others
- shows the status of transfer requests (pending, approved, completed)

### Integration with Smart Contracts

- uses wagmi to interact with the blockchain and the pre-deployed [smart contracts](https://github.com/samigabor/community-builder-contracts)
- displays transaction hash
- TODO: display transaction statuses (success, failure, pending)

