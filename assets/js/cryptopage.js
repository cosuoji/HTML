let btcPrice; 
let percentageChange; 
let btcAmount = document.getElementById("btcAmount")
let percentageSection = document.getElementById("percentageSection")
let tether = document.getElementById("tether")
let tetherSubtext = document.getElementById("tetherSubtext")
let tetherAmount = 2057.89
let bitcoinAmount = 55845.78
let bitcoin = document.getElementById("bitcoin")
let bitcoinSubtext = document.getElementById("bitcoinSubtext")
let totalValue = document.getElementById("balance")


let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

window.addEventListener("load", (event) => {
 const requestUrl = "https://api.coincap.io/v2/assets";
    fetch(requestUrl)
    .then(res => res.json())
    .then(data =>{
        //console.log(Object.entries(data)[0][1][0])
       btcPrice = Object.entries(data)[0][1][0].priceUsd
       btcPrice = Number(btcPrice).toFixed(2)
       percentageChange = Number(Object.entries(data)[0][1][0].changePercent24Hr).toFixed(2)
       console.log(USDollar.format(btcPrice))

       btcAmount.innerHTML = USDollar.format(btcPrice)

       if(percentageChange < 0){
        percentageSection.classList.add("badge-danger")
       }
       else{
         percentageSection.classList.add("badge-success")
       }

       percentageSection.innerHTML = percentageChange + "%" 


       tether.innerHTML = USDollar.format(tetherAmount)
       tetherSubtext.innerHTML = tetherAmount + " USDT"


       bitcoin.innerHTML = USDollar.format(bitcoinAmount)
       bitcoinSubtext.innerHTML = (bitcoinAmount/btcPrice).toFixed(5) + " BTC"

       balance.innerHTML = USDollar.format(tetherAmount + bitcoinAmount)
    })

});   