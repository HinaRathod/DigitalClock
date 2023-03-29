const hoursEl = document.querySelector("#hours");

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hoursEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondsEl.innerHTML = s;
  ampm.innerHTML = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);

  console.log(h, m, s, ampm);
}
updateClock();
