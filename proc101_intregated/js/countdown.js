let countdown;
let targetDate = new Date();
// Change time if you like

targetDate.setDate(targetDate.getDate() + 8);
targetDate.setHours(targetDate.getHours() + 20);

function startCountdown() {
  countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedTime = `${days < 10 ? '0' + days : days}:${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById("display").textContent = formattedTime;
// TIME LEFT
    if (timeLeft < 0) {
      clearInterval(countdown);
      document.getElementById("display").textContent = "00:00:00:00";
    }
  }, 1000);
}
startCountdown();