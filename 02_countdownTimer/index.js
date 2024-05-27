// algorithm
/**
 
1. timer function 
2. start function 
3. stop function 
4. continue function 
5. reset function

 */

// all control buttons
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButon = document.querySelector(".reset");

// inputs variable and value
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTimer);
resetButon.addEventListener('click', resetTime)

let intervalId = null;

// start timer function
function startTime() {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;
  startButton.style.display = "none";
  stopButton.style.display = "initial";
  // call the timer
  intervalId = setInterval(timer, 1000);
}

function stopTimer() {
  if (stopButton.innerHTML == "Stop") {
    clearInterval(intervalId)
    stopButton.innerHTML = "continue";
  } else {
    startTime()
    stopButton.innerHTML = "Stop";
  }
  // call the stop function
}

// timer function
function timer() {


  if(seconds.value > 60) {
    minutes.value = minutes.value + 1
    seconds.value = seconds.value - 60
  }
  if(minutes.value > 60) {
    hours.value = hours.value + 1
    minutes.value = minutes.value - 60
  }
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
    stopButton.style.display = 'none'
    startButton.style.display = 'initial'
    return 
  } else if (seconds.value != 0) {
    seconds.value = `${seconds.value < 10 ? "0" : ""}${seconds.value - 1}`;
  } else if(minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value = `${minutes.value < 10 ? "0" : ""}${minutes.value - 1}`
  } else if(hours.value != 0 && minutes.value == 0) {
    minutes.value = 60;
    hours.value = `${hours.value < 10 ? "0": ""}${hours.value - 1}`
  }
}


// reset function 
function resetTime() {
    clearInterval(intervalId)
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
    stopButton.style.display = 'none'
    startButton.style.display = 'initial'
    return 
}