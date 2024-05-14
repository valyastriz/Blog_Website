document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const headerBorder = document.getElementById('lightBorderHeader')

    //check for current setting of light/dark
    let currentMode = localStorage.getItem('mode');
    //check if currentMode is empty and set to default
    if(!currentMode) {
        localStorage.setItem('mode', 'lightMode');
        currentMode = 'lightMode';
    }
    if (currentMode === 'lightMode') {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
    else if (currentMode === 'darkMode') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }

    // onlick
    //if sunIcon is clicked, set body to darkmode, make sun invisible and make noon vivisbl
    sunIcon.addEventListener('click', () => {
        //change the light/dark mode
        body.classList.remove('lightMode');
        body.classList.add('darkMode');
        //change sun/moon
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        localStorage.setItem('mode', 'lightMode');
    });

    moonIcon.addEventListener('click', () => {
        //change the light/dark mode
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        //change sun/moon
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        localStorage.setItem('mode', 'darkMode');
    });

});