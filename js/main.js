function timeReveal() {
    let countDownDate = new Date("Feb 22, 2024 15:37:25").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        
        // Find the timeRemaining between now and the count down date
        let timeRemaining = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        let countdownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        document.getElementById("demo").innerHTML = countdownText;
        
        if (timeRemaining < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}
document.getElementById("c").addEventListener('click', function(event) {
   // PC
    timeReveal();
});

document.addEventListener('touchstart', (e) => {
    // MOBILE
    timeReveal();
});
