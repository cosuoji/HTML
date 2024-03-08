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




indexSend.addEventListener("click", ()=>{
    
   let nameOfRecipient = recipient.value
   let amountToSend = amount.value
   
   nameSection.innerHTML = nameOfRecipient;
   amountSection.innerHTML = amountToSend
   
})



cancelButton.addEventListener("click", e =>{
 window.location.href = "dashboard.html"
})


confirmButton.addEventListener("click", e =>{

 window.location.href = "app-sms-verification.html" 

})

home.addEventListener("click", ()=>{
    window.location.href = "dashboard.html" 
})