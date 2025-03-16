// Variable to store the time in seconds
var timeSeconds = 0;
const alarm = new Audio('/alarm.mp3');
var started = false; // Flag to track whether the timer is running
var endTrigger = false;
    const oneMinute = 60;
    const fiveMinutes = 5 * 60;
// Main timer function, which takes element IDs for the timer and buttons
export function timer(minElement, secElement, minus5Btn, minus1Btn, plus5Btn, plus1Btn, startPauseBtn) {
    // Constants for 5 minutes (in seconds) and 1 minute (in seconds)

    // Event listener for "minus 5 minutes" button
    document.getElementById(minus5Btn).addEventListener("click", () => {
        console.log("Removed 5 minutes");
        
        // Decrease the time by 5 minutes (if time is greater than or equal to 5 minutes)
        if (timeSeconds >= fiveMinutes) {
            timeSeconds -= 5 * 60;
        }
        // If less than 5 minutes, set time to 0
        else if (timeSeconds < fiveMinutes || timeSeconds < oneMinute) {
            timeSeconds = 0;
        }

        // Update the displayed time
        setTimer(timeSeconds, minElement, secElement);
    });

    // Event listener for "plus 5 minutes" button
    document.getElementById(plus5Btn).addEventListener("click", () => {
        timeSeconds += 5 * 60; // Increase the time by 5 minutes

        // Update the displayed time
        setTimer(timeSeconds, minElement, secElement);
        console.log(timeSeconds);
    });

    // Event listener for "minus 1 minute" button
    document.getElementById(minus1Btn).addEventListener("click", () => {
        console.log("Removed 1 minute");
        
        // Decrease the time by 1 minute (if time is greater than or equal to 1 minute)
        if (timeSeconds >= oneMinute) {
            timeSeconds -= oneMinute;
        }
        else if (timeSeconds < oneMinute){
            timeSeconds = 0;
        }

        // Update the displayed time
        setTimer(timeSeconds, minElement, secElement);
    });

    // Event listener for "plus 1 minute" button
    document.getElementById(plus1Btn).addEventListener("click", () => {
        console.log("Added 1 minute");
        
        // Increase the time by 1 minute
        timeSeconds += oneMinute;

        // Update the displayed time
        setTimer(timeSeconds, minElement, secElement);
    });

    // Event listener for "start/pause" button
    document.getElementById(startPauseBtn).addEventListener("click", () => {
        if (started){

            runTimer(minElement,secElement,"pause");
            started = false;
            document.getElementById(startPauseBtn).innerHTML = 'Start';
        }

        else if (!started && !endTrigger && timeSeconds > 0){

            runTimer(minElement,secElement,"start");
            started = true;
            document.getElementById(startPauseBtn).innerHTML = 'Pause';
        }
        
    });

    window.addEventListener("keydown", event =>{
        event.preventDefault()
        if (event.code === "Space"){
            document.getElementById(startPauseBtn).click();
        }
    });

    window.addEventListener("keydown", event =>{
        if (event.code === "ArrowDown"){
            document.getElementById(minus5Btn).click();
        }
    });

    window.addEventListener("keydown", event =>{
        if (event.code === "ArrowUp"){
            document.getElementById(plus5Btn).click();
        }
    });

    window.addEventListener("keydown", event =>{
        if (event.code === "ArrowLeft"){
            document.getElementById(minus1Btn).click();
        }
    });

    window.addEventListener("keydown", event =>{
        if (event.code === "ArrowRight"){
            document.getElementById(plus1Btn).click();
        }
    });



}

// Function to update the timer display (in minutes and seconds)
function setTimer(time, minElement, secElement) {

    var toMin = Math.floor(time/60).toFixed();
    var toSec = time % 60;

    if(toSec <=9){

        document.getElementById(secElement).innerHTML = "0"+ toSec;
    }

    else{

        document.getElementById(secElement).innerHTML = toSec;
    }

    if(timeSeconds <= oneMinute * 9){

        document.getElementById(minElement).innerHTML = "0" +toMin;
    }
    else {

        document.getElementById(minElement).innerHTML = toMin;
    }
    // Update minutes and seconds
}


var interval = null;
function runTimer(minElement,secElement, command){
    if(command == "start"){
    
    interval = setInterval(() =>{
        if(timeSeconds > 0){
        timeSeconds -= 1;
        }


        if (timeSeconds <= 0 && endTrigger == false){
            alarm.play();
            console.log("alarm playing");
            clearInterval(interval);
            endTrigger = true;
        }
        setTimer(timeSeconds,minElement,secElement);
    },1000);   

    }

    else if (command == "pause"){
        clearInterval(interval);
        if(alarm){
            alarm.pause();
            alarm.load();
            endTrigger = false;
        }
    }
}
