const timeStarter = document.getElementById('time-starter');
const pauseButton = document.getElementById('pause-btn');
const ResetButton = document.getElementById('reset-btn');
const timerEndSound = new Audio('vine.mp3');
let timer;
let timeLeft;
// 2 functions were useless bro,fr, might as well optimize
function updateDisplay() {
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft % 60;
    document.getElementById('user-minutes').value = minutes.toString().padStart(2, '0');
    document.getElementById('user-seconds').value = seconds.toString().padStart(2, '0')
}
// want the time to upload  everything rvery time it changes values
function startTimer() {
    let initialMinutes = document.getElementById('user-minutes');
    const minutes = parseInt(initialMinutes.value) * 60;
    const initialSeconds = document.getElementById('user-seconds');
    const seconds = parseInt(initialSeconds.value);
    timeLeft = minutes + seconds;
    progressFill.style.transform = 'rotate(0deg)';
    if(timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        const progress = 360 - (timeLeft) *360
        updateDisplay();
        if(timeLeft<=0){
            clearInterval(timer);
            // changed order so you first hear sound and then alert
            timerEndSound.play();
            alert("wake up my G, it's time to take a break. You did good"); // yes, i did put a motivational message here
            
        }
    }, 1000);
}
function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25*60
    updateDisplay();
}

timeStarter.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
ResetButton.addEventListener("click", resetTimer);
updateDisplay()