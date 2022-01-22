//export default [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"}],"name":"addBlock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"addBlockToBalloon","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"address","name":"_invitingAddress","type":"address"}],"name":"addBlockWithReferralSystem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"balloonBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockInBaloon","outputs":[{"internalType":"uint256","name":"blockPrice","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"imageUrl","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"webSite","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockOfNumber","outputs":[{"internalType":"uint256","name":"blockPrice","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"imageUrl","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"webSite","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockStepPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"blocksOfAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"changeBalloonBlockInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_imageUrl","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_webSite","type":"string"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"changeBlockInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"getDefrostTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"totalCount","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"getQuantityByTotalAndPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"lastBlockNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralsMap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setBalloonBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setBlockStepPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setLastBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setReferralBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setSystemBlockPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"systemBlockPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"timeFrozenBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_qauntity","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
export default [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "name": "allBlocks",
        "stateMutability": "view",
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "created",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "blockPrice"
            },
            {
                "name": "number",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
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
        "inputs": [],
        "type": "function",
        "name": "balloonBlockPrice",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ]
    },
    {
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "created",
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
                "internalType": "address",
                "type": "address",
                "name": "owner"
            },
            {
                "name": "imageUrl",
                "type": "string",
                "internalType": "string"
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
                "name": "chain",
                "type": "string",
                "internalType": "string"
            }
        ],
        "name": "blockInBaloon",
        "stateMutability": "view"
    },
    {
        "name": "blockOfNumber",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "created",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "blockPrice",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "number",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "owner"
            },
            {
                "name": "imageUrl",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "name": "webSite",
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
        "name": "blockStepPrice",
        "inputs": [],
        "type": "function",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ],
        "name": "blocksOfAddress",
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "stateMutability": "view",
        "name": "lastBlockNumber",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "internalType": "uint8",
                "type": "uint8"
            }
        ]
    },
    {
        "inputs": [],
        "name": "lastBlockPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "inputs": [],
        "name": "referralBlockPrice"
    },
    {
        "outputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "referralsMap",
        "type": "function"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "name": "systemBlockPrice",
        "inputs": [],
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "stateMutability": "view",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "timeFrozenBlock",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_imageUrl",
                "internalType": "string",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string",
                "internalType": "string"
            },
            {
                "type": "string",
                "name": "_webSite",
                "internalType": "string"
            }
        ],
        "stateMutability": "payable",
        "outputs": [],
        "name": "addBlock",
        "type": "function"
    },
    {
        "type": "function",
        "name": "addBlockWithReferralSystem",
        "inputs": [
            {
                "type": "string",
                "name": "_imageUrl",
                "internalType": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "name": "_webSite",
                "type": "string",
                "internalType": "string"
            },
            {
                "type": "address",
                "name": "_invitingAddress",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "name": "addBlockToBalloon",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
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
                "name": "_webSite",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_blockNumber",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "name": "distribute",
        "stateMutability": "payable",
        "outputs": [],
        "type": "function"
    },
    {
        "type": "function",
        "inputs": [
            {
                "internalType": "string",
                "type": "string",
                "name": "_imageUrl"
            },
            {
                "type": "string",
                "internalType": "string",
                "name": "_description"
            },
            {
                "type": "string",
                "name": "_webSite",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "_blockNumber",
                "internalType": "uint256"
            }
        ],
        "name": "changeBlockInfo",
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "changeBalloonBlockInfo",
        "inputs": [
            {
                "name": "_imageUrl",
                "internalType": "string",
                "type": "string"
            },
            {
                "internalType": "string",
                "type": "string",
                "name": "_description"
            },
            {
                "internalType": "string",
                "name": "_webSite",
                "type": "string"
            },
            {
                "name": "_blockNumber",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "name": "getQuantityByTotalAndPercent",
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "totalCount"
            },
            {
                "name": "percent",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "getDefrostTime",
        "stateMutability": "view",
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "name": "_blockNumber",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "totalSupply",
        "type": "function",
        "stateMutability": "view"
    },
    {
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "name": "transferOwnership",
        "type": "function",
        "outputs": []
    },
    {
        "type": "function",
        "inputs": [
            {
                "type": "uint256",
                "name": "_qauntity",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "withdraw"
    },
    {
        "type": "function",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "owner"
            }
        ],
        "name": "tokensOfOwner",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "depositContract",
        "inputs": [],
        "stateMutability": "payable",
        "type": "function",
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
        "name": "setBlockStepPrice",
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "name": "setSystemBlockPrice",
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable",
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
        "name": "setLastBlockPrice",
        "outputs": [],
        "inputs": [
            {
                "name": "_price",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "setBalloonBlockPrice",
        "inputs": [
            {
                "type": "uint256",
                "name": "_price",
                "internalType": "uint256"
            }
        ]
    },
    {
        "name": "setReferralBlockPrice",
        "stateMutability": "nonpayable",
        "type": "function",
        "inputs": [
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": []
    }
]
