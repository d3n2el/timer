const timeStarter = document.getElementById('time-starter');
const pauseButton = document.getElementById('pause-btn');
const ResetButton = document.getElementById('reset-btn');
const timerEndSound = new Audio('vine.mp3');
let timer;
let initialTime = 25*60
let timeLeft = initialTime /* will need to add user input later, now just making a timer that works*/
// change text content automatically as time passes
function updateDisplay() {
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft % 60;
    document.querySelector('.time').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

function startTimer() {
    if(timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
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