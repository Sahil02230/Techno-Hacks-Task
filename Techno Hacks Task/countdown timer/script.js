let timer;
let timeLeft = 0;

function startTimer() {
    if (!timer) {
        const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        startBtn.disabled = true;
        stopBtn.disabled = false;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        timer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                startBtn.disabled = false;
                stopBtn.disabled = true;
                display.textContent = "00:00";
            } else {
                timeLeft--;
                minutes = Math.floor(timeLeft / 60);
                seconds = timeLeft % 60;
                display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    timeLeft = 0;
    stopTimer();
    const display = document.getElementById('display');
    display.textContent = "00:00";
}

function restartTimer() {
    timeLeft = 300; // Set the initial time in seconds (e.g., 300 seconds for 5 minutes)
    resetTimer();
    startTimer();
}
