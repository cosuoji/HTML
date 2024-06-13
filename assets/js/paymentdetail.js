

let dateSection = document.getElementById("dateRightNow")
let cancelButton = document.getElementById("cancelButton")
let home = document.getElementById('home')





let now = new Date()
let dateTime = now.toLocaleString()
dateSection.innerHTML = dateTime


cancelButton.addEventListener("click", e =>{
 window.location.href = "dashboard.html"
})


home.addEventListener("click", ()=>{
    window.location.href = "dashboard.html" 
})