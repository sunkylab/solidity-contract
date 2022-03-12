async function main() {


    const walletContractFactory = await hre.ethers.getContractFactory('wallet');
    const walletContract = await walletContractFactory.deploy();
    await walletContract.deployed();
    console.log("Contract deployed to:", walletContract.address);
  };
  
  main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1)
})