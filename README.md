# 🚦 Driver’s License Penalty Track (DLPT)

A decentralized violation and penalty tracking system for traffic management.  
**DLPT** allows officers to issue violations, cashiers to process payments, and drivers to view their penalty history — all backed by blockchain and Web3 for transparency.

---

## 🔗 Live Demo [View Demo](https://code-5nesyfzi0-driverslicencepenaltytracker.vercel.app)

---

## 🎯 Features

### 👮 Officer Module
- Connect wallet and issue digital violations (plate number, type, amount, location, timestamp).  
- View all violations you’ve issued in real-time.  
- Track status (Paid / Unpaid).  

### 💼 Cashier Module
- Search violations by plate number or ID.  
- Process and confirm payments.  
- Mark violations as paid securely on-chain.  

### 🚗 Driver Module
- Search by plate number or wallet address.  
- View all personal penalties and payment status.  
- Immutable and transparent record of offenses.  

### 🔐 Blockchain Integration
- Smart contract stores all violation records.  
- Ethers.js handles contract interactions.  
- Wallet integration with connect/disconnect, network validation, and reactive UI.  

---

## 🧱 Architecture & Structure

/CONTRACT ← Solidity smart contracts
/LOGO ← Logo / favicon assets
/officerDashboard ← Officer UI (HTML, JS, Tailwind)
/cashierDashboard ← Cashier UI (HTML, JS, Tailwind)
/driverDashboard ← Driver UI (HTML, JS, Tailwind)
index.html ← Landing page
contract$ABI.js ← ABI + deployed contract address for front-end
package.json ← Dependencies (if using npm)

yaml
Copy code

---

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Luigibarte4563/DLPT_Officer-Cashier-Driver.git
cd DLPT_Officer-Cashier-Driver

# Install dependencies (if any, e.g., bundler/server)
npm install

# Serve locally (you can use `npx serve .` or any static server)
npx serve .
Then open index.html or the respective module page (officer, cashier, driver) in your browser.

📦 Technologies Used
Smart Contract: Solidity

Web3 / Blockchain Interaction: Ethers.js v6

Frontend UI: HTML, Tailwind CSS, Vanilla JavaScript

Deployment: GitHub Pages / Netlify / Static hosting

🔧 Network Setup
Ensure MetaMask (or another Web3 wallet) is connected to your chosen testnet.
Example for Sepolia Testnet:

Network Name: Sepolia Testnet

RPC URL: [https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID](https://sepolia.infura.io/v3/927cc9e253b042d9b11fe17422a44763)

Chain ID: 11155111

Currency Symbol: ETH

Block Explorer: https://sepolia.etherscan.io

```
🧠 Summary
DLPT (Driver’s License Penalty Track) provides a transparent, blockchain-powered system for traffic violations.

Officers issue violations.

Cashiers validate and record payments.

Drivers track penalties in real-time.

This ensures trust, accountability, and immutability across all parties.
