window.onload = function() {
    let timeLeft = 5;
    const timerText = document.getElementById('timer');
    const progressFill = document.getElementById('progress-fill');
    
    // Start progress bar animation
    setTimeout(() => { progressFill.style.width = '100%'; }, 100);

    const countdown = setInterval(() => {
        timeLeft--;
        timerText.innerText = `Redirecting in ${timeLeft} seconds`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = "https://doi.org/10.5281/zenodo.19207360";
        }
    }, 1000);
};
