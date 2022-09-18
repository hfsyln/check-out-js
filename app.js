const counters = document.querySelectorAll(".buttons");
const plusinbutton = document.querySelectorAll(".plusinbutton");
let sourinbutton = document.querySelectorAll(".sourinbutton");
let spaan = document.querySelectorAll("span");
const total1 = document.querySelectorAll(".total1");
const shippingtotal = document.querySelector(".shipping");
const tax = document.querySelector(".tax");
const totalall = document.querySelector(".alltotal");
let sum = 0;
let shipping = 15;


shippingtotal.textContent = (sum.toFixed(2) + "$")
tax.textContent == (sum *0.18).toFixed(2) + "$"
totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
   

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
        totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
    }) 

})


sourinbutton.forEach((item)=> {
    item.addEventListener("click", () => {
        if (item.nextElementSibling.textContent > 0) {
        --item.nextElementSibling.textContent ;
        }
    item.parentElement.nextElementSibling.children[0].textContent =
    (item.nextElementSibling.textContent * item.parentElement.previousElementSibling.children[0].textContent).toFixed(2);

    let sum = 0
    total1.forEach((item) => {
        sum += +item.textContent
        shippingtotal.textContent = (sum.toFixed(2) + "$")
        console.log(shippingtotal.textContent)
    })
    tax.textContent = (sum *0.18).toFixed(2) + "$"
    totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"


    })

    
})   






