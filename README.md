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

Deployment is TBD.

## License

MIT License

Copyright (c) 2022 tymoran
