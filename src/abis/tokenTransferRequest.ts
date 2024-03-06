export const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "enum RequestStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "OnlyApprovedRequestCanBeCompleted",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "enum RequestStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "OnlyPendingRequestCanBeApproved",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "TransferRequestNotApproved",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferRequestToZeroAddress",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum RequestStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "UpdateTransferRequest",
        "type": "event"
    }
] as const