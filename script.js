// Countdown Timer Script
function updateCountdown() {
    const weddingDate = new Date('2025-06-01T10:00:00').getTime(); // Update with your wedding date and time
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = "Pernikahan Telah Dimulai!";
    }
}

const interval = setInterval(updateCountdown, 1000);
