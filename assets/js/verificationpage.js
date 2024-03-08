
let cancelButton = document.getElementById("cancelButton")
let confirmButton = document.getElementById("confirmButton")
let home = document.getElementById('home')



cancelButton.addEventListener("click", e =>{
 window.location.href = "dashboard.html"
})


confirmButton.addEventListener("click", e =>{

       window.location.href = "app-sms-verification.html" 

})

home.addEventListener("click", ()=>{
    window.location.href = "dashboard.html" 
})