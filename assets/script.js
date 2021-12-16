let btc = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let doge = document.getElementById("dogecoin")

let config = {
     "async": true,
     "scrossDomain":true,
     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=brl",
     "method":"GET",
     "headers":{}
}

$.ajax(config).done(function (response){
    
    btc.innerHTML = response.bitcoin.brl;
    eth.innerHTML = response.ethereum.brl;
    doge.innerHTML = response.dogecoin.brl;
   
});