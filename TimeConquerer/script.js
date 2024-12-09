document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const articlesLink = document.getElementById('articles-link');
    const videosLink = document.getElementById('videos-link');

    const homeSection = document.getElementById('home-section');
    const articlesSection = document.getElementById('articles-section');
    const videosSection = document.getElementById('videos-section');

    const iconList = document.querySelectorAll('.icon');
    const timerInput = document.getElementById('timer-input');
    const cancelTimerBtn = document.getElementById('cancel-timer-btn');
    const resetMainPageBtn = document.getElementById('reset-main-page-btn');

    let intervalId; // Variable to store interval ID for the timer
    // let eventType='home';

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(homeSection);
        resetTimer(); // Reset timer when going back to the main page
        changeBackground('home');
    });

    articlesLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(articlesSection);
        resetTimer(); // Reset timer when navigating to a new section
        changeBackground('articles');
    });

    videosLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(videosSection);
        resetTimer(); // Reset timer when navigating to a new section
        changeBackground('videos');
    });

    // Add event listeners to icons
    iconList.forEach(icon => {
        icon.addEventListener('click', function() {
            if (!icon.classList.contains('clicked')) {
                // Hide other icons
                iconList.forEach(otherIcon => {
                    if (otherIcon !== icon) {
                        otherIcon.style.display = 'none';
                    }
                });

                // Display a timer beneath the clicked icon
                const timerDiv = document.createElement('div');
                timerDiv.classList.add('timer');
                icon.appendChild(timerDiv);

                // Get the duration from user input and convert to seconds
                const durationInMinutes = parseInt(timerInput.value);
                const durationInSeconds = durationInMinutes * 60;

                // Start the timer
                let seconds = 0;
                intervalId = setInterval(function() {
                    const remainingMinutes = Math.floor((durationInSeconds - seconds) / 60);
                    const remainingSeconds = (durationInSeconds - seconds) % 60;
                    timerDiv.innerText = remainingMinutes + 'm ' + remainingSeconds + 's';
                    seconds++;
                    if (seconds > durationInSeconds) {
                        clearInterval(intervalId);
                        timerDiv.innerText = 'Time\'s up!';
                        icon.classList.add('clicked'); // Add clicked class after the timer finishes
                    }
                }, 1000);

                // Remove click event listener from this icon
                icon.removeEventListener('click', arguments.callee);
                changeBackground(icon.dataset.event); // Change background image based on clicked icon
            }
        });
    });

    cancelTimerBtn.addEventListener('click', function() {
        resetTimer();
    });

    resetMainPageBtn.addEventListener('click', function() {
        resetMainPage();
        changeBackground('home'); // Reset background image to default
    });

    function resetTimer() {
        // Clear the timer interval if it exists
        if (intervalId) {
            clearInterval(intervalId);
        }
        // Remove 'clicked' class from icons
        iconList.forEach(icon => {
            icon.classList.remove('clicked');
            const timerDiv = icon.querySelector('.timer');
            if (timerDiv) {
                timerDiv.remove(); // Remove timer display
            }
        });
    }

    function resetMainPage() {
        // Reset the main page by displaying all sections and removing 'clicked' class from icons
        const allSections = document.querySelectorAll('section');
        allSections.forEach(section => {
            section.style.display = 'block';
        });
        iconList.forEach(icon => {
            icon.style.display = 'inline-block';
            icon.classList.remove('clicked');
            const timerDiv = icon.querySelector('.timer');
            if (timerDiv) {
                timerDiv.remove(); // Remove timer display
            }
        });
    }

    function showSection(section) {
        // Hide all sections
        const allSections = document.querySelectorAll('section');
        allSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        section.style.display = 'block';
    }

    function changeBackground(eventType) {
        const body = document.querySelector('body');
        switch (eventType) {
            case 'home':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'articles':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'videos':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'study':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'exercise':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'coding':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            case 'work':
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
                break;
            default:
                body.style.backgroundImage = "url('https://d3lzcn6mbbadaf.cloudfront.net/media/details/pjimage_720220524083948.jpg')";
        }
        body.style.backgroundSize = "100% 100%";
        body.style.backdropFilter = "blur(5px)"
    }
});
