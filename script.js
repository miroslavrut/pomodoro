const display = document.querySelector("#display");

let workTime = 1500;
let breakTime = 300;

function formatTime(i) {
  return (i < 10) ? "0" + i : i;
}

function timer() {
  min = formatTime(Math.floor((workTime % 3600) / 60));
  sec = formatTime((workTime % 3600) % 60); 
  display.textContent = `${min}:${sec}`;
  workTime--;
}

document.querySelector("#start").addEventListener("click", () => {
  setInterval(timer, 1000);
});