function timer(seconds) {
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
  },1000);
}

function displayTimeLeft(seconds) {
  min = Math.floor((seconds % 3600) / 60 );
  sec = (seconds % 3600) % 60;
  const display = `${min < 10 ? '0' : '' }${min}:${sec < 10 ? '0' : ''}${sec}`;
  console.log(display);
  document.title = display;
}

function startTimer() {
  // ....
  
}