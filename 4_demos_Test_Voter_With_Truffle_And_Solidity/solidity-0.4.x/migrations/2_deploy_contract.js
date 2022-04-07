let Voter = artifacts.require("./Voter.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Voter, ["one"]);
  let voter = await Voter.deployed();
  await voter.addOption("one");
  await voter.addOption("two");
  await voter.startVoting();
};
