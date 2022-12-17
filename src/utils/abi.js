

export default [
    {
        "stateMutability": "nonpayable",
        "inputs": [],
        "type": "constructor"
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "name": "created",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "blockPrice",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "number",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "type": "string",
                "name": "imageUrl",
                "internalType": "string"
            },
            {
                "name": "description",
                "internalType": "string",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "webSite",
                "type": "string"
            },
            {
                "internalType": "string",
                "type": "string",
                "name": "chain"
            }
        ],
        "name": "allBlocks",
        "type": "function",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "constant": true,
        "signature": "0xe9e2385b"
    },
    {
        "type": "function",
        "inputs": [],
        "name": "balloonBlockPrice",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "constant": true,
        "signature": "0x7ebec905"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "name": "blockInBaloon",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "created",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "blockPrice",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "number"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "name": "imageUrl",
                "internalType": "string",
                "type": "string"
            },
            {
                "name": "description",
                "internalType": "string",
                "type": "string"
            },
            {
                "name": "webSite",
                "internalType": "string",
                "type": "string"
            },
            {
                "name": "chain",
                "type": "string",
                "internalType": "string"
            }
        ]
    },
    {
        "stateMutability": "view",
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "created"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "blockPrice"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "number"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "name": "imageUrl",
                "internalType": "string",
                "type": "string"
            },
            {
                "type": "string",
                "name": "description",
                "internalType": "string"
            },
            {
                "name": "webSite",
                "type": "string",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "name": "chain",
                "type": "string"
            }
        ],
        "name": "blockOfNumber",
        "type": "function"
    },
    {
        "inputs": [],
        "type": "function",
        "name": "blockStepPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "constant": true,
        "signature": "0x90bd9e7d"
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "blocksOfAddress",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            },
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint8",
                "type": "uint8"
            }
        ],
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "name": "lastBlockNumber",
        "constant": true,
        "signature": "0x2552317c"
    },
    {
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "lastBlockPrice",
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xcf689d01"
    },
    {
        "type": "function",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "referralBlockPrice",
        "stateMutability": "view",
        "inputs": [],
        "constant": true,
        "signature": "0x7db948cf"
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "name": "referralsMap",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "name": "systemBlockPrice",
        "type": "function",
        "constant": true,
        "signature": "0xe7b4219d"
    },
    {
        "stateMutability": "view",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "timeFrozenBlock",
        "type": "function",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ]
    },
    {
        "name": "addBlock",
        "outputs": [],
        "type": "function",
        "inputs": [
            {
                "type": "string",
                "name": "_imageUrl",
                "internalType": "string"
            },
            {
                "type": "string",
                "name": "_description",
                "internalType": "string"
            },
            {
                "type": "string",
                "name": "_webSite",
                "internalType": "string"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "inputs": [
            {
                "name": "_imageUrl",
                "type": "string",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "type": "string",
                "name": "_webSite",
                "internalType": "string"
            },
            {
                "name": "_invitingAddress",
                "internalType": "address",
                "type": "address"
            }
        ],
        "outputs": [],
        "type": "function",
        "name": "addBlockWithReferralSystem",
        "stateMutability": "payable"
    },
    {
        "name": "addBlockToBalloon",
        "type": "function",
        "inputs": [
            {
                "internalType": "string",
                "name": "_imageUrl",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "name": "_webSite",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_blockNumber",
                "type": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "inputs": [],
        "name": "distribute",
        "outputs": [],
        "type": "function",
        "stateMutability": "payable"
    },
    {
        "name": "changeBlockInfo",
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "string",
                "name": "_imageUrl",
                "internalType": "string"
            },
            {
                "name": "_description",
                "type": "string",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "type": "string",
                "name": "_webSite"
            },
            {
                "type": "uint256",
                "name": "_blockNumber",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "type": "string",
                "name": "_imageUrl",
                "internalType": "string"
            },
            {
                "name": "_description",
                "type": "string",
                "internalType": "string"
            },
            {
                "type": "string",
                "internalType": "string",
                "name": "_webSite"
            },
            {
                "internalType": "uint256",
                "name": "_blockNumber",
                "type": "uint256"
            }
        ],
        "name": "changeBalloonBlockInfo",
        "type": "function",
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "getQuantityByTotalAndPercent",
        "stateMutability": "pure",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "totalCount"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "percent"
            }
        ]
    },
    {
        "stateMutability": "view",
        "inputs": [
            {
                "type": "uint256",
                "name": "_blockNumber",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "getDefrostTime",
        "type": "function"
    },
    {
        "stateMutability": "view",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "constant": true,
        "signature": "0x18160ddd"
    },
    {
        "type": "function",
        "outputs": [],
        "name": "transferOwnership",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_qauntity"
            }
        ],
        "name": "withdraw"
    },
    {
        "stateMutability": "view",
        "type": "function",
        "name": "tokensOfOwner",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "internalType": "uint256[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "name": "depositContract",
        "inputs": [],
        "outputs": []
    },
    {
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_price"
            }
        ],
        "type": "function",
        "outputs": [],
        "name": "setBlockStepPrice",
        "stateMutability": "nonpayable"
    },
    {
        "name": "setSystemBlockPrice",
        "stateMutability": "nonpayable",
        "outputs": [],
        "type": "function",
        "inputs": [
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "setLastBlockPrice",
        "outputs": []
    },
    {
        "type": "function",
        "inputs": [
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
        "name": "setBalloonBlockPrice"
    },
    {
        "name": "setReferralBlockPrice",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "uint256",
                "name": "_price",
                "internalType": "uint256"
            }
        ],
        "outputs": []
    }
]
