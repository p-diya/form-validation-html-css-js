const hrHand = document.querySelector("#hour");
const minHand = document.querySelector("#minute");
const secHand = document.querySelector("#second");

   var date = new Date();

   let hr = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();

   let hrPosition = (hr*360/12 + (min*(360/60)/12)), 
       minPosition = ((min*360/60) + (sec*(360/60)/60)), 
       secPosition = sec*360/60;

function runTheClock() {

   secPosition += 6;
   minPosition += (6/60);
   hrPosition += (3/360);

   hrHand.style.transform = "rotate(" + hrPosition + "deg)";
   minHand.style.transform = "rotate(" + minPosition + "deg)";
   secHand.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);