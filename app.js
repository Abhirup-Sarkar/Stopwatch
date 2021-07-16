

// buttons
// var startButton = document.querySelector("#start")
// var stopButton = document.querySelector("#stop")
// var resetButton = document.querySelector("#Reset")

// variable to hold display values

let seconds = 0;
let minutes = 0;
let hours = 0;

//increment seconds, minutes and hours at intervals
function stopWatch(){
    seconds++;
    if (seconds/60 ===1){
        seconds = 0;
        minutes++;
    }
    if (minutes/60 ===1){
        minutes = 0;
        hours++;
    }
}
// Display updated display time
 
document.getElementById("display").innerHTML = hours + ":"+ minutes +":"+ seconds;

window.setInterval(stopWatch,1000)

// function clickButton(){
//     console.log("clicked");
// }
// startButton.addEventListener("click", clickButton)
