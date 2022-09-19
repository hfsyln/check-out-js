const counters = document.querySelectorAll(".buttons");
const plusinbutton = document.querySelectorAll(".plusinbutton");
const minusinbutton = document.querySelectorAll(".minusinbutton");
const spaan = document.querySelectorAll("span");
const total1 = document.querySelectorAll(".total1");
const shippingtotal = document.querySelector(".shipping");
const tax = document.querySelector(".tax");
const totalall = document.querySelector(".alltotal");
const remove = document.querySelectorAll(".remove");
let sum = 146.96;
let shipping = 15;


shippingtotal.textContent = (sum.toFixed(2) + "$")
tax.textContent == (sum *0.18).toFixed(2) + "$"
totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
   

plusinbutton.forEach((item)=>{
    item.addEventListener("click", () =>{
        ++item.previousElementSibling.textContent;
    item.parentElement.nextElementSibling.children[0].textContent =
    (item.previousElementSibling.textContent * item.parentElement.previousElementSibling.children[0].textContent).toFixed(2);
        
        
            
            sum += +item.parentElement.previousElementSibling.children[0].textContent
            shippingtotal.textContent = (sum.toFixed(2) + "$")
            //console.log(shippingtotal.textContent)

        tax.textContent = +(sum *0.18).toFixed(2) + "$"
        totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
    }) 

})


minusinbutton.forEach((item)=> {
    item.addEventListener("click", () => {
        if (item.nextElementSibling.textContent > 1) {
        --item.nextElementSibling.textContent ;

        item.parentElement.nextElementSibling.children[0].textContent =
    (item.nextElementSibling.textContent * item.parentElement.previousElementSibling.children[0].textContent).toFixed(2);

    
        
        sum -= +item.parentElement.previousElementSibling.children[0].textContent
        shippingtotal.textContent = (sum.toFixed(2) + "$")
        //console.log(shippingtotal.textContent)
    
    tax.textContent = (sum *0.18).toFixed(2) + "$"
    totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
        }

    })


    
})   

remove.forEach((item) =>{
    item.addEventListener("click",() =>{
        item.parentElement.parentElement.remove()
        
    

        sum -= +item.previousElementSibling.children[0].textContent
        //+item.previousElementSibling.previousElementSibling.children[1].textContent * +item.previousElementSibling.previousElementSibling.previousElementSibling.children[0].textContent


        shippingtotal.textContent = (sum.toFixed(2) + "$")
        
        tax.textContent = (sum *0.18).toFixed(2) + "$"
        totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"

        console.log(sum)
        if (sum.toFixed(2) == 0){
            shipping = 0
            document.querySelector(".ship").innerHTML = 0
            totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
        }else {
            totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
        }



    })
})





