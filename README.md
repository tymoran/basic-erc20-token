# Basic ERC20 Token

A basic ERC20 token based on an OpenZeppelin ERC20 standard contract.
This is loosely based on the [Hardhat Tutorial](https://hardhat.org/tutorial) as part of the maintainer's learning process.

Stack:

- Hardhat (build tool & local EVM)
- Ethers (web3 library)
- OpenZeppelin (base contracts)
- Chai (testing)

## Usage instructions

The token contract is located in `contracts/Token.sol`.

### Compiling the token

Run `npm run compile` to compile the contract and build the ABI, which will be located in `artifacts/contracts`.

### Running tests

Run `npm run test` to execute the test suite, located at `test/Token.js`.

### Deploying the contract

Deployment is currently only possible on the local network backed by hardhat. See the section below.

### Connect to the local network

Run `npm run node` which will launch a local network backed by hardhat and display several test wallets. The first wallet is the owner of the contract by default.

After that, running `npm run deploy:local` will deploy the token on it and display the contract and owner addresses.

You can then connect to the local network on which the contract is deployed on `localhost:8545` and use your preferred web3 client with any of the wallets above.

## License

MIT License

Copyright (c) 2022 tymoran
