//button
var startButton = document.querySelector("#start")
var stopButton = document.querySelector("#stop")





//Variables to hold display time values

let seconds = 0;
let minutes = 0;
let hours = 0;

function clickButtonHandler() {
    //increment seconds, minutes and hours at intervals
    

    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

        // Display updated display time

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;

    

}





startButton.addEventListener("start", clickButtonHandler)