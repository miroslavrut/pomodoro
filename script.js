let countdown;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const end = now + seconds * 1000;
  displayTimeLeft(seconds);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((end - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  min = Math.floor((seconds % 3600) / 60 );
  sec = (seconds % 3600) % 60;
  const display = `${min < 10 ? '0' : '' }${min}:${sec < 10 ? '0' : ''}${sec}`;
  document.querySelector(".time-left").textContent = display;
  document.title = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

document.querySelector(".incr-work").addEventListener("click",increaseWorkTime);
document.querySelector(".work").addEventListener("click", startTimer);
document.querySelector(".decr-work").addEventListener("click",decreaseWorkTime);

document.querySelector(".incr-break").addEventListener("click",increaseBreakTime);
document.querySelector(".break").addEventListener("click", startTimer);
document.querySelector(".decr-break").addEventListener("click",decreaseBreakTime);



function increaseWorkTime() {
  
  let newTime = parseInt(document.querySelector(".work").dataset.time) + 60;
  document.querySelector(".work").dataset.time = newTime;
  displayTimeLeft(newTime);
}

function decreaseWorkTime() {
  let seconds = parseInt(document.querySelector(".work").dataset.time);
  if (seconds === 0) return;
  document.querySelector(".work").dataset.time = seconds - 60;
  displayTimeLeft(seconds - 60);
}

function increaseBreakTime() {
  let newTime = parseInt(document.querySelector(".break").dataset.time) + 60;
  document.querySelector(".break").dataset.time = newTime;
  displayTimeLeft(newTime);
}

function decreaseBreakTime() {
  let seconds = parseInt(document.querySelector(".break").dataset.time);
  if (seconds === 0) return;
  document.querySelector(".break").dataset.time = seconds - 60;
  displayTimeLeft(seconds - 60);
}