export const abi = [
    {
        "inputs": [],
        "name": "ApproveForYourselfDenied",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CompleteForOthersDenied",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotApprovedRequest",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotPendingRequest",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferToZeroAddressDenied",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "enum RequestStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "UpdateTransferRequest",
        "type": "event"
    }
] as const