const timeStarter = document.getElementById('time-starter');
const pauseButton = document.getElementById('pause-btn');
const ResetButton = document.getElementById('reset-btn');
const timerEndSound = new Audio('vine.mp3');
let timer;
let initialMinutes = document.getElementById('user-minutes');
const initialSeconds = document.getElementById('user-seconds');
let initialTime = parseInt(initialMinutes.value) * 60 + parseInt(initialSeconds.value);
let timeLeft = initialTime;
// change text content automatically as time passes
function updateMinutesDisplay() {
    const minutes = Math.floor(timeLeft/60);
    document.getElementById('user-minutes').value =
        `${minutes.toString().padStart(2, '0')}`;

}
function updateSecondsDisplay() {
    const seconds = timeLeft % 60;
    document.getElementById('user-seconds').value =
        `${seconds.toString().padStart(2, '0')}`
}

function startTimer() {
    if(timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateMinutesDisplay();
        updateSecondsDisplay();
        if(timeLeft<=0){
            clearInterval(timer);
            alert("wake up my G, it's time to take a break. You did good"); // yes, i did put a motivational message here
            timerEndSound.play();
        }
    }, 1000);
}
function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = initialTime
    updateDisplay();
}

timeStarter.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
ResetButton.addEventListener("click", resetTimer);
updateDisplay()