Testing with Truffle

# Install Truffle
npm install -g truffle
truffle <command>


truffle init # Create a new project
truffle unbox <box-name> # Download demo project
truffle unbox metacoin
truffle compile # Compile contracts
truffle develop # Start test Ethereum "network"
truffle test # Run unit tests
truffle migrate # Deploy smart contracts

contracts/Voting.sol                                           <-   Contracts in Solidity
contracts/MultiSigWallet.sol
migration/1_initial_deploy.js                                  <- Migration (deployment) scripts
migration/2_deploy_voting.js
test/TestVoting.sol                                            <- Tests in Solidity or JavaScript
test/test_wallet.js
truffle.js                                                     <- Project related settings
truffle-config.js                                              <- Alternative settings file name


Truffle Migration
--------------------


Works similar to a database migration
- Define several migration steps
- Each step can deploy contracts or
interact with them
- Each step is executed only once

var Voter = artifacts.require("./Voter.sol");
module.exports = async function(
deployer, network, accounts) {
await deployer.deploy(Voter);
// Pass arguments to a constructor
await deployer.deploy(Voter, arg1, arg2, ...)
};



# Deploy a contract to track the state of migration process
vim migration/1_initial_deploy.js
# Deploy our smart contract
vim migration/2_deploy_voting.js
truffle migrate # Runs steps 1 and 2
truffle migrate # Does nothing
# Deploy new smart contract
vim migration/3_deploy_game.js
truffle migrate # Executes only 3_deploy_game.js
S



truffle-contract API
-------------------
// web3.js
contract.methods.vote(1)
.send({
from: senderAddress
});
// truffle-contract
contract.vote(1, {from: accounts[0]});


Truffle Migration
-----------------
# Deploy a contract to track the state of migration process
vim migration/1_initial_deploy.js
# Deploy our smart contract
vim migration/2_deploy_voting.js
truffle migrate # Runs steps 1 and 2
truffle migrate # Does nothing
# Deploy new smart contract
vim migration/3_deploy_game.js
truffle migrate # Executes only 3_deploy_game.js



Re-deploy Contracts
---------------------
truffle migrate --reset
# For a test environment
# Contract are immutable
truffle migrate --reset --network test_network


One project can use multiple networks
-------------------------------------
- Main network
- Test network (e.g. Rinkeby)
- Test Ethereum environment



Truffle Configuration
----------------------
// truffle.js or truffle-config.js
module.exports = {
networks: {
live: {
host: "localhost",
port: 9545,
network_id: 1, // "*" to match any network
gas: 10000, gasPrice: 10,
from: "0x123..45"
}
}
}

Migrations with Multiple Networks
----------------------------------
truffle migrate
truffle migrate --network rinkeby



Test Environment
-----------------
Just a single process
Implements the same web3 API
Emulates a network with multiple accounts
and fake Ether
Allows to reset state of the network


Running Test Environment
--------------------
# Starts test environment (configured by truffle.js)
truffle development
# Install and run Genache CLI
npm install -g ganache-cli
genache-cli
# Or download and run Genache GUI


Install Genache and create Truffle project
-----------------
Start Genache 

Create a Truffle project
Deploy a contract using Truffle
Interact with the deployed contract

Testing with Truffle
-----------------------
Allows to test smart contracts without
deploying them
Automatic process
Write tests in Solidity or JavaScript
- Have their pros and cons


JavaScript Test
------------------
var Voter = artifacts.require("./Voter.sol");
contract("Voter", function(accounts) {
it("contract test", async function() {
let voter = await Voter.new();
await voter.addOption("option", {from: accounts[0]});
});
});



Most tests will have the same pattern
------------------------------------
Create a contract
Interact with it
Verify its state
Need to avoid duplicated contract creation with "beforeEach" method


Contract Initialization
------------------------
contract("Voter", function(accounts) {
let voter;
beforeEach(async function() {
voter = await Voter.new();
});
it("contract test", async function(accounts) {
await voter.addOption("option", {from: accounts[0]});
});
});

Run unit tests using Truffle
-----------------------------


Testing with Solidity PRO/CON
----------------------
Advantages
- Syntax is more readable
- No need to use async/await
- Transactions/calls are easier to read

Disadvantages
- Only allows to use a single account
- Hard to test contracts for exceptions
- Cannot use JavaScript libraries

}


Testing with Solidity
-------------------------
import "../contracts/Voter.sol";
import "truffle/Assert.sol";
contract TestVoter { // Should start with "Test"
function test() public { // Should start with "test"
Voter voter = new Voter();
uint[] memory votes = voter.getVotes();
Assert.equal(votes, expected, "Unexpected votes");
}
}