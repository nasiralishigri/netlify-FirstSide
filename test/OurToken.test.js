
 const OurToken  = artifacts.require('./OurToken.sol')
 const BigNumber = web3.BigNumber;
 require('chai')
   .use(require('chai-bignumber')(BigNumber))
   .should();
 
 
 //require('chai').use(require('chai-bignumber')(BigNumber)).should();
 let token;
 console.log("Calling here 1");
 
 contract('this is the OurToken token test',accounts=>{
     console.log("ITs calling inside ");
     const creater =accounts[0];
     // const _name='OurToken';
     // const _symbol='TRC';
     // const _decimal=18;
     // beforeEach(async function(){
        
     //     token = await OurToken.new(_name,_symbol,_decimal);
     // })
 
    it('it shoud run and ok' , function(){
        console.log("Its properly run");
    })
 })