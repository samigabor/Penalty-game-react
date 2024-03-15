export type Member = {
    communityAddress: string;
    address: string;
    tokenId: string;
};

export type Community = {
    name: string;
    symbol: string;
    address: string;
    admin: string;
};

export type TransferRequest = {
    communityAddress: string;
    from: string;
    to: string;
    tokenId: string;
};
