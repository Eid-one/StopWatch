

 let greeting = " Hello World"

console.log(greeting)

 let startBnt= document.querySelector('#startbnt');
  let resetBtn = document.querySelector('#resetbtn');


  // Varibles

let Seconds = 0;
let  minutes = 0;
let hours  =  0;

 //leading to Zero

  leadingSeconds = 0;
  leadingMinutes = 0;
  leadingHours = 0;

  // Varibale  for set interval and Timer

let timerInterval = null;
let timerStatus ="stopped";

 function stoppWatch(){

    Seconds++;
    if( Seconds /60 ===1){
        Seconds=0;
        minutes++;
        if(minutes/60 ===1){
            minutes= 0;
            hours++;
        }
    }
 if( Seconds <10){
    leadingSeconds = "0" + Seconds.toString();
 }else{
    leadingSeconds= Seconds;
 }
 if( minutes <10){
    leadingMinutes = "0" + minutes.toString();
 }else{
    leadingMinutes= minutes;
 }
 if( hours <10){
    leadingHours = "0"+ hours.toString();
 }else{
    leadingHours= hours;
 }


    let  displayTimer= document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes +":" + leadingSeconds;

 }

 

 startBnt.addEventListener('click',function(){ 
     if ( timerStatus ==="stopped"){

        timerInterval = window.setInterval(stoppWatch, 1000);
      
        document.getElementById('startbtn').innerHTML=` <i class="fa-solid fa-pause" id="pause"></i>`;

         timerStatus = "started";
     } else{

         window.clearInterval(timerInterval);

   document.getElementById('startbtn').innerHTML =` <i class="fa-solid fa-play"></i>`;
          timerStatus = "stopped";
     }

 });




 resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    Seconds = 0;
    minutes=  0;

    hours =  0;

     document.getElementById('timer').innerHTML="00:00:00";
 })
 
 