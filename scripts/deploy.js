const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}`);

    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy();
    console.log(`Token Address: ${token.address}`);
}

main()
.then(() => process.exit(0))
.catch((err) => {
    console.error(err);
    process.exit(1);
})