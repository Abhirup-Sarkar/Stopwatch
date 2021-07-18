// var to store start,stop,reset button

var startButton = document.querySelector("#start")
var stopButton = document.querySelector("#stop")

// var to store leading zeros for display time

let  displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;



//Variables to hold display time values

let seconds = 0;
let minutes = 0;
let hours = 0;

function stopWatch(){
    seconds++;
    if(seconds/60 == 1){
        minutes++;
        seconds = 0;
    }
    if(minutes/60 == 1){
        hours++;
        minutes = 0;
    }
    if(seconds<10){
        diplaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes<10){
        displayMinutes = "0" + minutes.toString();
    }
    if(hours<10){
        displayHours = "0" + hours.toString();
    }
    display.innerHTML = displayHours +":"+ displayMinutes +":"+ displaySeconds;
}
window.setInterval(stopWatch,1000)

// function clickButtonHandler() {
//     //increment seconds, minutes and hours at intervals
    

//     seconds++;
//     if (seconds / 60 === 1) {
//         seconds = 0;
//         minutes++;
//     }
//     if (minutes / 60 === 1) {
//         minutes = 0;
//         hours++;
//     }

//         // Display updated display time

//     document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;

    

// }





startButton.addEventListener("start", clickButtonHandler)