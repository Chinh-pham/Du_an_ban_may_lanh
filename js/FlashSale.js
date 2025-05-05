
const now = new Date();
const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 8, 0, 0);

function updateTimer() {
    const current = new Date();
    const diff = deadline - current;

    if (diff <= 0) {
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        clearInterval(timerInterval);
        return;
    }

    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();