const plusinbutton = document.querySelectorAll(".plusinbutton");
const minusinbutton = document.querySelectorAll(".minusinbutton");
const shippingtotal = document.querySelector(".shipping");
const tax = document.querySelector(".tax");
const totalall = document.querySelector(".alltotal");
const remove = document.querySelectorAll(".remove");
//const shippingFree = 300
let sum = 146.96;
//const shipping = 15;
//const taxRate = 0.18

//sayfa yüklenince sabit değerleri locale at
//aynı bilgilerin başka sayfalarda tanımlamadan kulanımını sağlar
//sayfalar arası veri aktarımı
window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shipping", shipping)
    localStorage.setItem("shippingFree", shippingFree)

    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shipping", shipping)
    sessionStorage.setItem("shippingFree", shippingFree)

    //session browser kapanınca gider local kalır
})


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

        //console.log(sum)
        
        if (sum.toFixed(2) == 0){
            shipping = 0
            document.querySelector(".ship").innerHTML = 0
            totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
        }else {
            totalall.textContent = ((sum *0.18) + sum + shipping).toFixed(2) + "$"
        }



    })
})


////////////////////////////////////////////! 
/*
////////////////////*diğer yöntem //derste çözülen
//yukarıdaki tanımlamalara gerek kalmadı
calculateCartPrice() //sayfanın başına bunu taşırsak açılıştaki 1 er elemanın değerlerini toplar ve altta 0 0 0 değil doğru değerler yazar
const allBag= document.querySelector(".shippingbox")

allBag.addEventListener("click", (e)=>{
    console.log(e.target)

    if(e.target.className == "minusinbutton"){
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--   //dört işlem string ile ortadaki oparetör sayesinde sayı gibi işlem yapılır
            calculateProductPrice(e.target);
            calculateCartPrice();
        } else {
                if(confirm("product will be remove")){ //confirm iki seçim sunar ok if i çalıştırır cancel else durumunu
                    //remove
                    e.target.parentElement.parentElement.parentElement.remove()
                    calculateCartPrice();
                }
            }

    }
    else if (e.target.className == "plusinbutton") {
        e.target.previousElementSibling.innerText++;
        calculateProductPrice(e.target);
        calculateCartPrice();
    }
    else if(e.target.className == "remove"){
        e.target.parentElement.previousElementSibling.previousElementSibling.remove()
        calculateCartPrice();
    }

    else {
        console.log("başka elemente tıklayınız")
    }

})
//yukardaki her bir ürün için 
const calculateProductPrice = (clickedBtn) => {
    console.log(clickedBtn);
    const prodactInfoDiv = clickedBtn.parentElement.parentElement; //kapsayıcı div ulaşmak için
    const price = prodactInfoDiv.children[1][0].textContent; //fiyat
    const quantitiy = prodactInfoDiv.querySelector( ".miktar").innerText //miktar
    const prodactTotalDiv =  prodactInfoDiv.querySelector("p .total1");
    prodactTotalDiv.innerHTML = (price * quantitiy).toFixed(2) //dönüşüme gerek yok number oldu

}
///alttaki genel toplam için
const calculateCartPrice = () => {
    const tümToplam = document.querySelectorAll(".total1")
    //const tümToplam = document.getElementsByClassName(".total1")  // [...docum......] baştaki 3 nokta ile array e çevir
    let subTotal =  0
    tümToplam.forEach((div)=>{
        subTotal += parseFloat(div.innerHTML) //işlem yapılır
    });
    const taxPrice = subTotal * localStorage.getItem("taxRace"); //yukarda yorum satırında olsaydı localden çekmek için
    const shippingPrice = parseFloat((subTotal > 0 && subTotal > localStorage.getItem("shippingFree")? localStorage.getItem("shipping") : 0)) //parse ile sayı oldu

    document.querySelector(".tax").innerHTML = taxPrice.toFixed(2);
    document.querySelector(".alltotal").innerHTML = tümToplam.toFixed(2);
    document.querySelector(".ship").innerHTML = (tümToplam + taxPrice + shippingPrice).toFixed(2)    document.querySelector(".shipping").innerHTML = shippingPrice

}
*/
