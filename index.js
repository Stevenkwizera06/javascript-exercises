document.getElementById("myButton").onclick = function () {
       const buttonCheck = document.getElementById("myCheckbox");
       const visaBtn = document.getElementById("visaBtn");
       const masterCardBtn = document.getElementById("masterCardBtn");
       const paypalBtn = document.getElementById("visaBtn");

       if(buttonCheck.checked){
              console.log("you are subscribed")
       }
       else{
              console.log("you are not subscribed")
       }

       if(visaBtn.checked){
              console.log("you are paying using visa card")
       }
       else if(masterCardBtn.checked){
              console.log("you are paying using master card")
       }
       else if(paypalBtn.checked){
              console.log("you are paying using paypal card")
       }
       else{
              console.log("you must select a payment card!     ")
       }

}