// dlptContract.js

// Contract Address (deployed on Sepolia or your chosen network)
export const CONTRACT_ADDRESS = "0x31af80cdd067610ec9a6df6c1dd6fec0d34287e2";

// Contract ABI
export const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_violationId", "type": "string" },
      { "internalType": "address", "name": "_violator", "type": "address" },
      { "internalType": "string", "name": "_license", "type": "string" },
      { "internalType": "string", "name": "_violationType", "type": "string" },
      { "internalType": "uint256", "name": "_amount", "type": "uint256" },
      { "internalType": "string", "name": "_location", "type": "string" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" }
    ],
    "name": "issueViolation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_violationId", "type": "string" },
      { "internalType": "string", "name": "_receiptLink", "type": "string" }
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
      { "indexed": false, "internalType": "string", "name": "violationId", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "violator", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "license", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "ViolationIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "string", "name": "violationId", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "cashier", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "receiptLink", "type": "string" }
    ],
    "name": "ViolationPaid",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllViolations",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "violationId", "type": "string" },
          { "internalType": "address", "name": "officer", "type": "address" },
          { "internalType": "address", "name": "violator", "type": "address" },
          { "internalType": "string", "name": "license", "type": "string" },
          { "internalType": "string", "name": "violationType", "type": "string" },
          { "internalType": "uint256", "name": "amount", "type": "uint256" },
          { "internalType": "string", "name": "location", "type": "string" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
          { "internalType": "string", "name": "status", "type": "string" },
          { "internalType": "string", "name": "receiptLink", "type": "string" }
        ],
        "internalType": "struct DLPTViolations.Violation[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "violationIds",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "name": "violations",
    "outputs": [
      { "internalType": "string", "name": "violationId", "type": "string" },
      { "internalType": "address", "name": "officer", "type": "address" },
      { "internalType": "address", "name": "violator", "type": "address" },
      { "internalType": "string", "name": "license", "type": "string" },
      { "internalType": "string", "name": "violationType", "type": "string" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "string", "name": "location", "type": "string" },
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "internalType": "string", "name": "status", "type": "string" },
      { "internalType": "string", "name": "receiptLink", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
