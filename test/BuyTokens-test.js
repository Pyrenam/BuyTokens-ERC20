/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const { expect } = require("chai");

describe('Onyx Token', function () {
  let dev, owner, Onyx, OX ;
  const INIT_SUPPLY = ethers.utils.parseEther('1000000');
  const NAME = 'Onyx';
  const SYMBOL = 'OX';
  const DECIMALS = 18;
  beforeEach(async function () {
     [dev, owner] = await ethers.getSigners();
     Onyx = await ethers.getContractFactory('Onyx');
     OX = await Onyx.connect(dev).deploy(owner.address, INIT_SUPPLY);
    await OX.deployed();
  });

 describe('Deployment', function () {
  it(`Should have name ${NAME}`, async function () {
    expect(await Onyx.name()).to.equal(NAME);
  });
  it(`Should have name ${SYMBOL}`, async function () {
    expect(await Onyx.symbol()).to.equal(SYMBOL);
  });
  it(`Should have decimals ${DECIMALS}`, async function () {
      expect(await Onyx.decimals()).to.equal(DECIMALS);
    });
  it(`Should have total supply ${INIT_SUPPLY.toString()}`, async function () {
    expect(await Onyx.totalSupply()).to.equal(INIT_SUPPLY);
  });
  it(`Should mint initial supply ${INIT_SUPPLY.toString()} to owner`, async function () {
    expect(await Onyx.balanceOf(owner.address)).to.equal(INIT_SUPPLY);
  }); 

});


