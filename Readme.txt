-----------------------------------------------------------------
To use Solidity on Windows you need to activate and use Windows Linux Subsystem feature
------------------------------------------------------------------
Videos:
https://docs.microsoft.com/en-us/learn/modules/blockchain-learning-solidity/
https://www.udemy.com/tutorial/getting-started-with-ethereum-solidity-development/windows-environment-setup/
Articles:
https://www.geeksforgeeks.org/how-to-install-solidity-in-windows/#:~:text=Step%201%3A%20Open%20control%20panel,after%20installation%20set%20it%20up
https://medium.com/@m_mcclarty/setting-up-solidity-on-windows-10-993a1d2c615c
https://docs.soliditylang.org/en/v0.8.11/installing-solidity.html

-------------------------------------------------------------------
Editor : If you have ViusualStudio code 
Install VS code + Solidity extension
You can use any Editor , bonus if there are Solidity plugins for it
-------------------------------------------------------------------


------------------------------------------------------------------
Using Solidity compiler
------------------------------------------------------------------
solc
--combined-json bin,abi \ # Generate bytecode and ABI
--output-dir output-folder \ # Output folder
Voter.sol # Contracts to compile


------------------------------------------------------------------
Test env Truffle + Ganache ( Drizzle optional)
The Truffle Suite essentially consists of three different elements: Truffle, Ganache, and Drizzle. 
------------------------------------------------------------------
https://trufflesuite.com/

Truffle
It is development environment, testing framework and asset pipeline 
for blockchains using the Ethereum Virtual Machine (EVM)
used to develop DApps (Distributed Applications). 
It:
Compiling Contracts, 
Deploying Contracts, 
Injecting it into a web app, 
Creating front-end for DApps and Testin

Ganache  
Allows to configure networks with the help of Ganache to create a personal Ethereum blockchain. 
The application provides the user with a GUI allowing the user to inspect how the blockchain reacts to 
the actions taken and see how the contracts written are operating in the real environment. 
is configurable  personal development blockchain for rapid Ethereum and Corda distributed 
application development. 
Ganache is a configurable and personal development blockchain with a personal GUI. 
This means that a developer can use Ganache to deploy smart contracts, develop applications and run tests.
Ganache can run in two different versions, either as an application and a command-line tool.
You can use Ganache across the entire development cycle; 
enabling you to develop, deploy, and test your dApps in a safe and deterministic environme

Drizzle 
optional GUI
Drizzle is a collection of front-end libraries that can help make the development of dApps 
easier and more predictable. Drizzle is based on a Redux store, 
which gives the users access to the development tools around Redux.

------------------------------------------------------------------
Test Network Rinkeby
------------------------------------------------------------------
There are public testnets. These are networks used by protocol developers or smart contract developers 
to test both protocol upgrades as well as potential smart contracts in a production-like environment 
before deployment to Mainnet. Think of this as an analog to production versus staging servers.

It’s generally important to test any contract code you write on a testnet before deploying to the Mainnet.
If you're building a dapp that integrates with existing smart contracts, 
most projects have copies deployed to testnets that you can interact with.

Most testnets use a proof-of-authority consensus mechanism. This means a small number of nodes are chosen 
to validate transactions and create new blocks – staking their identity in the process.

Oldest existing similar to Mainnet
Ropsten 
A proof-of-work testnet. This means it's the best like-for-like representation of Ethereum.

Will be using:
Rinkebuy  Faster
A proof-of-authority testnet for those running Geth client.
Rinkeby is an Ethereum test network that allows for blockchain development testing before deployment on Mainnet, the main Ethereum network. 

Kovan
A proof-of-authority testnet for those running OpenEthereum clients.

Görli
A proof-of-authority testnet that works across clients.


Recomended: Rinkeby

---------------------------------
Mainnet ( we are not goin there !!!)
---------------------------------
Mainnet is the primary public Ethereum production blockchain, 
where actual-value transactions occur on the distributed ledger.

When people and exchanges discuss ETH prices, 
they're talking about Mainnet ETH.

---------------------------------
Walet 
--------------------------------
Used to store 
account - private key  used to sing transactions

Think about account as unque ID (if you lost credentials - you loose the account) 
you can have as many accounts as you want

PrivateKey --------------> PublicKey -> Address

Installed Desktop version from https://ethereum.org/en/wallets/find-wallet/
MyCrypto Desktop App
Psw : "MyCrypto1917"

--------------------------------
Wallet sample details
------------------------------
Account Address 
0x707Ef1C4914194275ABD9AEaaE2614E45C2706E1

Private key 
0x6266d5be1bc6fb3e56e0a63b7c5d7bc3d4c17c8c90a4b8c1a208dbe121ddc581
A private key proves full ownership of an Ethereum account, which includes any and all funds on that account
private key + password -> keystore file


Created Wallet - got KeyStore file generated
{
    "version": 3,
    "id": "6e47d887-4962-4368-bb40-566f6475c92a",
    "address": "707ef1c4914194275abd9aeaae2614e45c2706e1",
    "crypto": {
        "ciphertext": "403287dccff321924b5e46e6fad05c51e1614bad1a9b185f3e6283042f08838e",
        "cipherparams": {
            "iv": "5db3998b72f17dae6960a78ed97048e5"
        },
        "cipher": "aes-128-ctr",
        "kdf": "scrypt",
        "kdfparams": {
            "dklen": 32,
            "salt": "7f1c2a3fbbef8480f129ea1d04485ac8ec2de8816e7d58a7af0676eb5a02ed36",
            "n": 8192,
            "r": 8,
            "p": 1
        },
        "mac": "d27d540eb7e64b1074cd98167ea4332716e85b6acb541617e495e7e8e50d68dd"
    }
}

Keystore files, commonly known as UTC/JSON files, are files that are generated using a private key + a password of your choosing, 
essentially encrypting the private key.
keystore file + password -> private key

See  for detials
https://support.mycrypto.com/general-knowledge/ethereum-blockchain/difference-between-wallet-types/



--------------------------------------------
Smart Contract Dev languages Why Solidity ?
---------------------------------------------
1. Solidity is the flagship high-level language for Smart contracts 
Oldest most developed and most popular
Java Script like
https://soliditylang.org/
Object-oriented, high-level language for implementing smart contracts.
Curly-bracket language that has been most profoundly influenced by C++.
Statically typed (the type of a variable is known at compile time).
Supports:
Inheritance (you can extend other contracts).
Libraries (you can create reusable code that you can call from different contracts – like static functions in a static class in other object oriented programming

2. Viper  and it's predecessor Serpent considerations ( Seprent almost dead now) 
https://vyper.readthedocs.io/en/latest/index.html
Pythonic programming language
Strong typing
Small and understandable compiler code
Deliberately has less features than Solidity with the aim of making contracts more secure and easier to audit. Vyper does not support:
Modifiers
Inheritance
Inline assembly
Function overloading
Operator overloading
Recursive calling
Infinite-length loops
Binary fixed points
NOTE: additional layer to concentrate on security 


3. Differences betwen languages
3.1
Vyper looks logically similar to Solidity but syntactically similar to Python. 
It eliminates many of the Object Oriented Programming paradigms and hence 
requiring a new paradigm definition for transactional programming
3.2
Focused on adding low level features 
3.3 
Viper while based on python and have an already very easy to understand syntax, 
seem underdeveloped/undersupported compared to Solidity. 
