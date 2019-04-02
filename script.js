let countdown;

function timer(seconds) {
  clearInterval(countdown);
  displayTimeLeft(seconds);
  const now = Date.now();
  const end = now + seconds * 1000;
  
  mode = document.querySelector(".mode").dataset.mode;
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((end - Date.now()) / 1000);
    displayTimeLeft(secondsLeft);
    if(secondsLeft == 0) {
      let seconds;
      if(mode == "work") {
        document.querySelector(".mode").dataset.mode = "break";
        updateMode();
        seconds = parseInt(document.querySelector(".break").dataset.time);
      }
      else {
        document.querySelector(".mode").dataset.mode = "work";
        updateMode(1);
        seconds = parseInt(document.querySelector(".play").dataset.time);
      }
      alarm();
      timer(seconds);
    }
    else
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const display = formatTime(seconds);
  document.querySelector(".time").textContent = display;
  document.title = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

////// EVENT LISTENERS //////

document.querySelector(".incr-work").addEventListener("click",increaseWorkTime);
document.querySelector(".play").addEventListener("click", startTimer);
document.querySelector(".decr-work").addEventListener("click",decreaseWorkTime);
document.querySelector(".incr-break").addEventListener("click",increaseBreakTime);
document.querySelector(".decr-break").addEventListener("click",decreaseBreakTime);

/////

function increaseWorkTime() {
  let newTime = parseInt(document.querySelector(".play").dataset.time) + 60;
  document.querySelector(".play").dataset.time = newTime;
  displayWorkTime(newTime);
}

function decreaseWorkTime() {
  let seconds = parseInt(document.querySelector(".play").dataset.time);
  if (seconds === 60) return;
  document.querySelector(".play").dataset.time = seconds - 60;
  displayWorkTime(seconds - 60);
}

function increaseBreakTime() {
  let newTime = parseInt(document.querySelector(".break").dataset.time) + 60;
  document.querySelector(".break").dataset.time = newTime;
  displayBreakTime(newTime);
}

function decreaseBreakTime() {
  let seconds = parseInt(document.querySelector(".break").dataset.time);
  if (seconds === 60) return;
  document.querySelector(".break").dataset.time = seconds - 60;
  displayBreakTime(seconds - 60);
}

function displayBreakTime(seconds) {
  const display = formatTime(seconds);
  document.querySelector(".settings-break").textContent = display;
}

function displayWorkTime(seconds) {
  const display = formatTime(seconds);
  document.querySelector(".settings-work").textContent = display; 
}

function updateMode(session) {
  document.querySelector(".mode").textContent =
   session? "WORK" : "BREAK";
}

function alarm() {
  var audio = new Audio("alert.mp3");
  audio.play();
}

function formatTime(seconds) {
  min = Math.floor((seconds % 3600) / 60 );
  sec = (seconds % 3600) % 60;
  return `${min < 10 ? '0' : '' }${min}:${sec < 10 ? '0' : ''}${sec}`;
}