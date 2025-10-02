let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr1 = "0xd1AfD2cfdD9d168bb48b7b5aCDffE4c1Ae13b753";
const sttaddr2 = "0x84cbd41ed3e5122490dafe629f6969b2de657065";
const sttabi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"aAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"clear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiveMoney","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sChunk","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aSBlock","type":"uint256"},{"internalType":"uint256","name":"_aEBlock","type":"uint256"},{"internalType":"uint256","name":"_aAmt","type":"uint256"},{"internalType":"uint256","name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sSBlock","type":"uint256"},{"internalType":"uint256","name":"_sEBlock","type":"uint256"},{"internalType":"uint256","name":"_sChunk","type":"uint256"},{"internalType":"uint256","name":"_sPrice","type":"uint256"},{"internalType":"uint256","name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewAirdrop","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"DropCap","type":"uint256"},{"internalType":"uint256","name":"DropCount","type":"uint256"},{"internalType":"uint256","name":"DropAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewSale","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"SaleCap","type":"uint256"},{"internalType":"uint256","name":"SaleCount","type":"uint256"},{"internalType":"uint256","name":"ChunkSize","type":"uint256"},{"internalType":"uint256","name":"SalePrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_to","type":"address"}],"name":"withdrawMoneyTo","outputs":[],"stateMutability":"nonpayable","type":"function"}];


let sttcontract1 = new web3.eth.Contract(sttabi, sttaddr1);
let sttcontract2 = new web3.eth.Contract(sttabi, sttaddr2);


const loadweb3 = async () => {
  try {
		web3 = new web3js.myweb3(window.ethereum);
		console.log('Injected web3 detected.') 
		sttcontract1 = new web3.eth.Contract(sttabi, sttaddr1);
	    sttcontract2 = new web3.eth.Contract(sttabi, sttaddr2);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
    }
  }

};
////////////////////////////////////

const getAirdrop2 = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}
  let ethval = document.getElementById("buyinput_PLX").value=' 0.000240';
  if(ethval >=  0.000240){
  ethval = Number(ethval) * 1e18;
	  let fresh = document.getElementById('airinputplx').value;
  if(fresh === "")
    fresh = "0x0000000000000000000000000000000000000000";
  sttcontract1.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Alert',
  'Buy as low as BNB.',
  'error'
)    
  }
}
const buyPLX = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}

  let ethval = document.getElementById("buyinputplx").value;
  if(ethval >= 0.001){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinputplx').value;
  if(fresh === "")
    fresh = "0x0000000000000000000000000000000000000000";
  sttcontract1.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Buy as low as 0.001 BNB.',
  'error'
)    
  }
}

////////////////////////////////////
const getAirdrop3 = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}
  let ethval = document.getElementById("buyinput_IXO").value=' 0.000082';
  if(ethval >=  0.000082){
  ethval = Number(ethval) * 1e18;
	  let fresh = document.getElementById('airinputixo').value;
  if(fresh === "")
    fresh = "0x0000000000000000000000000000000000000000";
  sttcontract2.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Alert',
  'Buy as low as BNB.',
  'error'
)    
  }
}

const buyIXO = async () => {

	await loadweb3();

	if (addr == undefined) {
		Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}

  let ethval = document.getElementById("buyinputixo").value;
  if(ethval >= 0.001){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinputixo').value;
  if(fresh === "")
    fresh = "0x0000000000000000000000000000000000000000";
  sttcontract2.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
    if(!err) console.log(res);
    else console.log(err);
  });
  }else{
    Swal.fire(
  'Buy Alert',
  'Buy as low as 0.001 BNB.',
  'error'
)    
  }
}

//////////////////////////////////////////////////////////////////////////////
window.onload=function(){ 

  function querySt(ji) {
 
  hu = window.location.search.substring(1); 
  gy = hu.split("&");
 for (i = 0; i < gy.length; i++) {
   ft = gy[i].split("=");
   if (ft[0] == ji) {
     return ft[1];
   }
 }
 }
 var ref = querySt("ref");


 if (ref == null) {} else {
   (document.getElementById('airinputplx').value = ref , document.getElementById('airinputixo').value = ref);
 }
 }

///////////////////////////////////////////////////////////////////////////////
function getreflink(){
     var referaladd = document.getElementById('refaddress').value;
     if(!document.getElementById('refaddress').value){
      Swal.fire(
  'Referral Alert',
  'Please Enter You Address.',
  'error'
)
     }else{
if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
    Swal.fire(
  'Referral Alert',
  'Your address is not valid.',
  'error'
)
}else{    
  document.getElementById('refaddress').value = 'https://phloxcoin.com/?ref=' + document.getElementById('refaddress').value;
}
}
}
function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
  }
/////////////////////////////////////////////////////
const tokenAddress1 = '0xd1afd2cfdd9d168bb48b7b5acdffe4c1ae13b753';
const tokenAddress2 = '0x84cbd41ed3e5122490dafe629f6969b2de657065';
const tokenSymbol1 = 'Phloxcoin';
const tokenSymbol2 = 'Ixoracoin';
const tokenDecimals = 8;
const tokenImage1 = 'https://raw.githubusercontent.com/Phloxcoin/Phloxcoin.github.io/main/img/phlox%20200x200.png';
const tokenImage2 = 'https://raw.githubusercontent.com/Phloxcoin/Phloxcoin.github.io/main/img/ixora%20200x200.png';

async function addTokenFunction1() {
try {
   const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress1, 
        symbol: tokenSymbol1, 
        decimals: tokenDecimals, 
        image: tokenImage1, 
      },
    },
  });
  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}

async function addTokenFunction2() {
try {
   const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress2, 
        symbol: tokenSymbol2, 
        decimals: tokenDecimals, 
        image: tokenImage2, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}



