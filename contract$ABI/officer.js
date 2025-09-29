/**
 * Smart Contract Setup (Address and ABI)
 * * This file exports the essential constants required to interact with the 
 * TrafficViolations smart contract on the Ethereum network using a library 
 * like Ethers.js or Web3.js.
 */

// 1. Contract Address
// This is the specific address of the deployed smart contract on the blockchain.
const CONTRACT_ADDRESS = "0x12e17c73ff8219ccd3265a4b66d83221e9991093";

const RPC_URL = "https://sepolia.infura.io/v3/927cc9e253b042d9b11fe17422a44763"; // Sepolia RPC

// 2. Contract ABI (Application Binary Interface)
// This JSON array defines all the public functions, events, and data structures 
// of the smart contract, telling the JavaScript library how to encode and 
// decode calls and data.
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_violationId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_violator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_license",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_violationType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "issueViolation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_violationId",
				"type": "string"
			}
		],
		"name": "markAsPaid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "violationId",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "officer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "violator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "license",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "violationType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "ViolationIssued",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllViolations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "violationId",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "officer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "violator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "license",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "violationType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct TrafficViolations.Violation[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalViolations",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_officer",
				"type": "address"
			}
		],
		"name": "getViolationsByOfficer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "violationId",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "officer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "violator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "license",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "violationType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct TrafficViolations.Violation[]",
				"name": "",
				"type": "tuple[]"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "violations",
		"outputs": [
			{
				"internalType": "string",
				"name": "violationId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "officer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "violator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "license",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "violationType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Optional: Export the constants so they can be imported into other files (e.g., in a Node.js environment)
// module.exports = {
//     CONTRACT_ADDRESS,
//     CONTRACT_ABI
// };
