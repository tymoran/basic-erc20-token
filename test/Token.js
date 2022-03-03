const { expect } = require('chai');

describe('Token', function () {
  let Token;
  let hardhatToken;

  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    Token = await ethers.getContractFactory('Token');
    [owner, addr1, addr2] = await ethers.getSigners();

    hardhatToken = await Token.deploy();
  });

  describe('Deployment', () => {
    it('should assign the total supply of tokens to the owner on deployment', async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe('Transactions', () => {
    it('should transfer tokens from the owner to another address', async () => {
      await hardhatToken.transfer(addr1.address, 10);
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);
    });

    it('should transfer tokens from an address to another one', async () => {
      await hardhatToken.transfer(addr1.address, 10);

      await hardhatToken.connect(addr1).transfer(addr2.address, 10);
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(10);
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(0);
    });

    it('should fail to transfer tokens from an address with an unsufficient balance', async () => {
      await hardhatToken.transfer(addr1.address, 10);

      await expect(
        hardhatToken.connect(addr1).transfer(addr2.address, 20)
      ).to.be.revertedWith('ERC20: transfer amount exceeds balance');

      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(0);
    });
  });
});
