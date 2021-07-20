//Variables to hold display time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// var to store leading zeros for display time

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
//var to hold setInterval

let interval = null;
let status = "stopped"

// function to start or stop 


function startButton() {
    if (status == "stopped") {
        interval = window.setInterval(stopWatch, 100);
        status = "started";

    }
}

function stopButton() {
    if (status == "started") {
        clearInterval(interval);
        status = "stopped";
    }
}

function resetButton() {
    if (status == "started" || status == "stopped") {
        window.clearInterval(interval)
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerHTML = "00:00:00"
        status = "stopped"
    }


}

function stopWatch() {

    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        
    }
    if (minutes / 60 === 1) {
        
        minutes = 0;
        hours++;
    }
    if (seconds < 10 || seconds === 0) {
        diplaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10 || mintues === 0) {
        displayMinutes = "0" + minutes.toString();
    }
    if (hours < 10 || hours === 0) {
        displayHours = "0" + hours.toString();
    }
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
