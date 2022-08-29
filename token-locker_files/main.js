//MORALIS
const serverUrl = "https://egsrzzvzhcqk.usemoralis.com:2053/server";
const appId = "jng5KHyf8b1HRPY1sLvS5ZJUJn86Z6cmjZkDf3Fg";
Moralis.start({ serverUrl, appId });


async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate({signingMessage:"CedillaLock v1", chainId: 56 });
  }
  console.log("logged in user:", user);
  
  document.getElementById("btn-login").value="Logout";
  document.getElementById("btn-login").onclick=logOut;
  document.getElementById("walletaddr").innerHTML = "Logged in : " + user.get('ethAddress').slice(0, 4) + "....." + user.get('ethAddress').slice(38, 42);
  document.getElementById("managemenu").innerHTML = '<div align="center" style="width:fit-content"><a href="https://cedilla.network/lock/manage/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></br>My Locks</a></div>';
  document.getElementById("ethwallet").value = user.get('ethAddress');
  switchNetworkBsc();

}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("btn-login").value="Connect";
  document.getElementById("btn-login").onclick=login;
  document.getElementById("walletaddr").innerHTML = "";
  document.getElementById("managemenu").innerHTML = "";
  document.getElementById("token1balance").innerHTML ="</br>";
  document.getElementById("token2balance").innerHTML ="</br>";
  document.getElementById("maxbutton").innerHTML = "";
}
// bind button click handlers
document.getElementById("btn-login").onclick = login;

///switch network


const switchNetworkBsc = async () => {
  try {
  await web3.currentProvider.request({
  method: "wallet_switchEthereumChain",
  params: [{ chainId: "0x38" }],
  });
  } catch (error) {
  if (error.code === 4902) {
  try {
    await web3.currentProvider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "56",
          chainName: "Binance Smart Chain",
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ],
    });
  } catch (error) {
    alert(error.message);
  }
  }
  }
  }

const currentUser = Moralis.User.current();
if (currentUser) {
login(); // do stuff with the user
} else {
// show the signup or login page
}

//GetAllVaultInfo

async function getTokenVaults() {

  const ABI = [{"inputs":[{"internalType":"address","name":"ofToken","type":"address"}],"name":"GetAllVaultInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}];

  const options = {
    chain: "bsc",
    address: "0x71F95AEF707a31DD47cf986a38893AB27e348794",
    function_name: "GetAllVaultInfo",
    abi: ABI,
    params: { ofToken: document.getElementById("vaultcontract").value },
  };
  const allowance = await Moralis.Web3API.native.runContractFunction(options);

  $.getJSON("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress="+document.getElementById("vaultcontract").value+"", async function (data){
 
  tsupply = data.result/10**18

  const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata({chain: "bsc", addresses: document.getElementById("vaultcontract").value});
  tokenname = tokenMetadata[0].name
  symbol = tokenMetadata[0].symbol
  decimals = tokenMetadata[0].decimals

  document.getElementById("tokenmeta").innerHTML = tokenname + " (" + symbol + ") "
  document.getElementById("explink").href = "https://bscscan.com/token/"+tokenMetadata[0].address
  document.getElementById("lockit").innerHTML = '</br></br><a href="new?token='+document.getElementById("vaultcontract").value+'"><input class="swapbutton" type="button" value="New Lock"></a></br>'

  for (i = 0; i < allowance.length; i++) {
  const ABI2 = [{"inputs":[{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"VaultInfo","outputs":[{"components":[{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"closed","type":"bool"},{"internalType":"uint256","name":"end","type":"uint256"}],"internalType":"struct CLockerv2.vault","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}];

  const options2 = {
    chain: "bsc",
    address: "0x71F95AEF707a31DD47cf986a38893AB27e348794",
    function_name: "VaultInfo",
    abi: ABI2,
    params: { vaultId: allowance[i] },
  };
  const allowance2 = await Moralis.Web3API.native.runContractFunction(options2);

  if(allowance2[3]==0){} else{

    const node0 = document.createElement("tr");
    document.getElementById("vaultstbody").appendChild(node0);

const node = document.createElement("td");
const textnode = document.createTextNode(allowance2[3]/10**decimals);
node.appendChild(textnode);
document.getElementById("vaultstbody").appendChild(node);

const node2 = document.createElement("td");
var unixTimestamp = allowance2[5];
var date = new Date(unixTimestamp*1000);
const textnode2 = document.createTextNode(date.getDate()+
"/"+(date.getMonth()+1)+
"/"+date.getFullYear()+
" "+date.getHours()+
":"+date.getMinutes()+
":"+date.getSeconds());
node2.appendChild(textnode2);
document.getElementById("vaultstbody").appendChild(node2);

const node3 = document.createElement("td");
node3.innerHTML = '<div data-precision="0.01" class="myBar'+allowance2[0]+' label-center"></div>';
document.getElementById("vaultstbody").appendChild(node3);

var bar = new ldBar('.myBar'+allowance2[0]+'', {
  "stroke": '#00ff73',
  "stroke-width": 7,
  "preset": "circle",
  "value": 100
 });
bar.set(
  ((allowance2[3]/10**decimals)/tsupply)*100,     /* target value. */
  true   /* enable animation. default is true */
);

const node4 = document.createElement("td");
node4.innerHTML = '<a href="vault/?id='+allowance2[0]+'"><img src="https://cedilla.network/lock/icons/locked.png" width="24px" height="24px"/></a>';
document.getElementById("vaultstbody").appendChild(node4);
    console.log(allowance2)
    
  
  }
  }})
}
getTokenVaults();

// if pair LP

async function getPairTokens() {

  token0ABI = [{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
  token1ABI = [{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
  await Moralis.enableWeb3();
  options0 = {
    chain: "bsc",
                  contractAddress: document.getElementById("vaultcontract").value,
                  functionName: "token0",
                  abi: token0ABI                
              };
  options1 = {
    chain: "bsc",
                  contractAddress: document.getElementById("vaultcontract").value,
                  functionName: "token1",
                  abi: token1ABI               
              };
  token0 = await Moralis.executeFunction(options0);
  token1 = await Moralis.executeFunction(options1);

  const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata({chain: "bsc", addresses: [
    token0,
    token1
  ]});

  document.getElementById("ifpair").innerHTML = ' - (<a href="https://bscscan.com/token/'+token0+'" target="_blank">$'+tokenMetadata[0].symbol+'</a> / <a href="https://bscscan.com/token/'+token1+'" target="_blank">$'+tokenMetadata[1].symbol+'</a>)'

}
getPairTokens();
