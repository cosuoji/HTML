let bankName = document.getElementById("bankName")
let accountNuumber = document.getElementById("accountNumber")
let recipient = document.getElementById("recipient")
let amount = document.getElementById("amount")

let amountSection = document.getElementById("amountSection")
let nameSection = document.getElementById("nameSection")

let indexSend = document.getElementById("indexSend")

let cancelButton = document.getElementById("cancelButton")
let confirmButton = document.getElementById("confirmButton")
let home = document.getElementById('home')
let error = document.getElementById('warning')

let total = document.getElementById("total")
let currentTotal = total.innerHTML
let nameOfRecipient
let amountToSend

localStorage.setItem("total", parseInt(currentTotal.split(",").join("").split(".").join("")))



indexSend.addEventListener("click", ()=>{
    
    nameOfRecipient = recipient.value
    amountToSend = amount.value
   
   nameSection.innerHTML = nameOfRecipient;
   amountSection.innerHTML = amountToSend
   
})


if(localStorage.getItem("deduction")){
    
    deduction = localStorage.getItem("deduction")
    storageTotal = localStorage.getItem("total")
    let newTotal = parseInt(storageTotal) - parseInt(deduction) * 100
    localStorage.setItem("total", newTotal)

    newTotal = newTotal.toString().split("")
    newTotal.splice(newTotal.length - 2, 0, ".")
    newTotal = Number(newTotal.join("")) 
    total.innerHTML =  newTotal.toLocaleString("en-US")
}

cancelButton.addEventListener("click", e =>{
 window.location.href = "dashboard.html"
 localStorage.setItem("deduction", 0)
})


confirmButton.addEventListener("click", e =>{
    
 let currentTotal = Number(localStorage.getItem("total"))
 let transactionTotal = Number(localStorage.getItem("transactions"))
   amountToSend = Number(amountToSend)
   console.log(currentTotal, amountToSend)
   if(amountToSend > 50000) {
    error.innerHTML = "Limit exceeeded for single transfer"
    return
}

if(transactionTotal >= 1){
  error.innerHTML = "Account Locked, Contact Support Immediately"
  return

}


   if(currentTotal - (Number(amountToSend) * 100) < 0){
     error.innerHTML = "Insufficient Funds for this transfer"
     return

   } else {
     window.location.href = "app-sms-verification.html" 
     localStorage.setItem("deduction", parseInt(amountToSend))

   }



})

home.addEventListener("click", ()=>{
    window.location.href = "dashboard.html" 
})


