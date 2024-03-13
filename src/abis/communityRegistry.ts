export const abi = [
    {
        "inputs": [
            {
                "internalType": "contract TokenPool",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "initialAdmin",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ApproveForYourselfDenied",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CommunityRegistryDoesNotAcceptTokenTransfers",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CompleteForOthersDenied",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "MemberAlreadyInCommunity",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "MemberNotInCommunity",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "NotTheTokenOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OnlyCommunityAdmin",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "TransferFailed",
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
                "indexed": false,
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "name": "CommunityDeployed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "CommunityTokenMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "MemberAssignedToCommunity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "MemberRemovedFromCommunity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
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
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approveTransferRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "assignTokenToMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "burnCommunityToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "communities",
        "outputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "communitiesByAdmin",
        "outputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "",
                "type": "address"
            }
        ],
        "name": "communityAdmins",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "",
                "type": "address"
            }
        ],
        "name": "communityMembers",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "completeTransferRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            }
        ],
        "name": "deployCommunityContract",
        "outputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCommunities",
        "outputs": [
            {
                "internalType": "contract CommunityToken[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "initiateTransferRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "isInCommunity",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "mintCommunityToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            }
        ],
        "name": "mintTokenToMember",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            },
            {
                "internalType": "contract CommunityToken",
                "name": "community",
                "type": "address"
            }
        ],
        "name": "removeMemberFromCommunity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPool",
        "outputs": [
            {
                "internalType": "contract TokenPool",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const