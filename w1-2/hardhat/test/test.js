const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Counter",function(){
    let owner;
    let signer;
    let counter;

    this.beforeEach(async function(){
        [owner, signer] = await ethers.getSigners();
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();

    })

    it("init equal 0", async function () {
        expect(await counter.counter()).to.equal(0);
      });
    
    it("add 1 equal 1", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(1);
    });

    it("to be revert", async function () {
       
        expect(await counter.connect(signer).counter()).to.be.reverted;
        });
   

})


