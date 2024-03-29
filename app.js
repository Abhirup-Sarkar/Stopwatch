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

//function for start button
function startButton() {
    if (status == "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        status = "started";

    }
}
//function for stop button
function stopButton() {
    if (status == "started") {
        clearInterval(interval);
        status = "stopped";
    }
}
//function for reset button
function resetButton() {
    if (status == "started" || status == "stopped") {
        window.clearInterval(interval)
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display-time").innerHTML = "00:00:00"
        status = "stopped"
    }
}
//function for the stopwatch
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
    if (seconds < 10 || seconds == 0) {
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

     
    if (minutes < 10 || mintues == 0) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if (hours < 10 || hours == 0) {
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    document.getElementById("display-time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
