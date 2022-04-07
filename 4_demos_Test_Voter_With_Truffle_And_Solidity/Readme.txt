Write a Truffle migration script
Deploy the crowdfunding contract to
Genache
Connect Wallet ( whichever you use Metamask ??? to Genache)

Can access Ethereum only with Metamask
- Stores user keys and accounts
- Provides connection to Ethereum
Will use  web3js
- Install via npm
- Will be downloaded with the UI code


WebAPI GUI - React optional
Create a React app
Go through the UI code
- Basis for other other demos

Fetching data from Ethereum network
Display information about a campaign

Sending a transaction to a network
Contribute to a campaign






Using UI components
------------------------
import { Input } from 'semantic-ui-react'
render() {
return <div>
<Input
actionPosition="left"
label="ETH"
labelPosition="right"/>
</div>
}

Loading Initial State
-----------------------
State can be loaded from outside
- Load data from a web server
- Load campaign state from an Ethereum
network

async componentDidMount() {
const campaign = await loadInfo(campaignAddress)
this.setState({
campaign: currentCampaign
})
}


Create a React app
---------------------------
Go through the UI code
- Basis for other other demos



Accessing Accessing Ethereum from a Browser (web3)
-------------------------
import Web3 from 'web3'
const provider = window.web3.currentProvider
const web3 = new Web3(provider)
// Use web3 instances tp talk to the test network





Sending a Transaction
-------------------------
const accounts = await web3.eth.getAccounts()
const account = accounts[0]
contract.methods.contribute()
.send({
from: account
value: 123
})

web3js Events
----------------------------
contract.methods.doWork(1, 2).send({from: account})
.on('receipt', (receipt) => { ... })
.on('confirmation', (confirmationNumber) => {
...
})
.on('error', (error) => { ... })