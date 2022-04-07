You will need Dev env
------------------------
NodeJS – to run JavaScript scripts
npm – to install JavaScript libraries
Code editor with Solidity code highlight
- Will use Visual Studio Code

Start setting development environment
Install Solidity compiler
Compile the voting contract


solc
--combined-json bin,abi \ # Generate bytecode and ABI
--output-dir output-folder \ # Output folder
Voter.sol # Contracts to compile


Compile the Multi-Sig Wallet contract
Inspect compiler output


------------------
Client 
Operations with Ethereum Clients
------------------
Need to interact with Ethereum
programmatically
Learn how to work with an Ethereum client
Learn about Ethereum clients' API


Query state of a node
Get state of an Ethereum network (as a node sees it)
Send transactions, deploy contracts
Manage accounts (private keys)

Clients( check new pones as well):

Geth
- Implemented in Go
Parity
- Implemented in Rust
ruby-ethereum, cpp-ethereum, pyethapp,
Ethereum(J)
All of them implement the Ethereum
specification

------------------------
For instance Running Geth
https://geth.ethereum.org/
------------------------
geth \
--rinkeby \ # Connect to the Rinkeby network
--rpc \ # Enable JSON-RPC
--syncmode=light # "Light" – faster sync mode
# Starts Geth on port 8545


geth accounts # Manage geth accounts
geth init # Create a new genesis block
geth help # Display help
geth attach # Interactive JavaScript session


Create an account with geth
Transfer funds to the new account
Interact with geth
