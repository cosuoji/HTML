let verifyButton = document.getElementById("verify")
let statusButton = document.getElementById("status")
let smsCode = document.getElementById("smscode")
let warning = document.getElementById("warning")
let home = document.getElementById('home')



verifyButton.addEventListener("click", e =>{

 


if(smsCode.value.length < 4){
    warning.innerHTML = "Please enter a 4 digit OTP"
    return
}


if(smsCode.value !== "4589"){
    warning.innerHTML = "Please enter the right 4 digit OTP"

     setTimeout(()=>{
        warning.innerHTML = " "
    },3000)

    return
}

 setTimeout(()=>{
        statusButton.classList.toggle("hidden")
    },500)

     setTimeout(()=>{
       window.location.href = "app-transaction-detail.html" 
    },50000)
})


home.addEventListener("click", ()=>{
    window.location.href = "dashboard.html" 
})