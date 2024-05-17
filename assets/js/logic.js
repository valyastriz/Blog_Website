document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    //check for current setting of light/dark
    let currentMode = localStorage.getItem('mode');
    //check if currentMode is empty and set to default
    if(!currentMode) {
        localStorage.setItem('mode', 'lightMode');
        currentMode = 'lightMode';
    }
    if (currentMode === 'lightMode') {
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
    else if (currentMode === 'darkMode') {
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }


    sunIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        localStorage.setItem('mode', 'darkMode');
        currentMode = 'darkMode';

    });


    moonIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        localStorage.setItem('mode', 'lightMode');
        currentMode = 'lightMode';
    });

});

