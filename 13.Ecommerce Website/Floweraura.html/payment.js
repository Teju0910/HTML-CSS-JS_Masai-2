prod()
var Total;
var data;
function prod(){
    data = JSON.parse(localStorage.getItem("cakeadded"));
   

 var image = document.querySelector("#i")
 image.src=data.image_url
 

var namee = document.querySelector("#n")
namee.textContent= data.name;

var rate = document.querySelector("#p")
rate.textContent="Price - " +" " + data.price;



document.querySelector(".textdiv").append(namee,rate);

    
    }   

var cashadd =  document.querySelector("#Cash")
cashadd.addEventListener("click",function(){
        
        Total = Total +29;
        console.log(total)
        var total = document.querySelector("#t")
        total.textContent = "Total Price - " + " " + Total ;
        alert(" Rs.29 Added");
        // location.reload();
    })


    document.querySelector(".caddtocart").addEventListener("click", function(){
        window.location.href = "Homepage.html";
}) 

