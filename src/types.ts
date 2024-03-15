export type Member = {
    communityAddress: string;
    address: string;
    tokenId: number;
};

export type Community = {
    token: string;
    name: string;
    symbol: string;
    admin: string;
};

export type TransferRequest = {
    communityAddress: string;
    from: string;
    to: string;
    tokenId: string;
};
