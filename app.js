const counters = document.querySelectorAll(".buttons");
const plusinbutton = document.querySelectorAll(".plusinbutton");
let sourinbutton = document.querySelectorAll(".sourinbutton");
let spaan = document.querySelectorAll("span");
let sum = 0;
const total1 = document.querySelectorAll(".total1");
const shippingtotal = document.querySelector(".shipping")
const tax = document.querySelector(".tax")


tax.textContent = (sum.toFixed(2) *0.18) + "$"
shippingtotal.textContent = (sum.toFixed(2) + "$")
   

plusinbutton.forEach((item)=>{
    item.addEventListener("click", () =>{
        ++item.previousElementSibling.textContent;
    item.parentElement.nextElementSibling.children[0].textContent =
    (item.previousElementSibling.textContent * item.parentElement.previousElementSibling.children[0].textContent).toFixed(2);
        
        let sum = 0
        total1.forEach((item) => {
            sum += +item.textContent
            shippingtotal.textContent = (sum.toFixed(2) + "$")
            console.log(shippingtotal.textContent)
        })
        tax.textContent = (sum *0.18).toFixed(2) + "$"
    
    }) 


})


sourinbutton.forEach((item)=> {
    item.addEventListener("click", () => {
        --item.nextElementSibling.textContent ;
    
    item.parentElement.nextElementSibling.children[0].textContent =
    (item.nextElementSibling.textContent * item.parentElement.previousElementSibling.children[0].textContent).toFixed(2);

    let sum = 0
    total1.forEach((item) => {
        sum += +item.textContent
        shippingtotal.textContent = (sum.toFixed(2) + "$")
        console.log(shippingtotal.textContent)
    })
    tax.textContent = (sum *0.18).toFixed(2) + "$"


    })

    
})   






