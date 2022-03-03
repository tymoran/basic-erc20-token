const { ethers } = require('hardhat');

async function main() {
  const [owner] = await ethers.getSigners();

  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy();

  console.log('Token deployed to:', token.address);
  console.log('Owner:', owner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
