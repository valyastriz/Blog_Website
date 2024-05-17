document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    //check for current setting of light/dark
    let currentMode = localStorage.getItem('mode');
    //check if currentMode is empty and set to default
    
    
    checkMode ();

    moonIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        setLightMode();
    });

    sunIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        setDarkMode();

    });
    
    function checkMode () {
        if(!currentMode) {
            setLightMode();
        }
        if (currentMode === 'lightMode') {
            setLightMode();
        }
        else if (currentMode === 'darkMode') {
            setDarkMode();
        }
    

    }

    function setLightMode () {
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        localStorage.setItem('mode', 'lightMode');
        currentMode = 'lightMode';
    }

    function setDarkMode () {
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        localStorage.setItem('mode', 'darkMode');
        currentMode = 'darkMode';
    }
});

