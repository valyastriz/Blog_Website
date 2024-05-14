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

    // onlick
    //if sunIcon is clicked, set body to darkmode, make sun invisible and make noon vivisbl
    sunIcon.addEventListener('click', () => {
        //update mode and refer to correct url page for that mode
        localStorage.setItem('mode', 'darkMode');
        window.location.href = 'index.html?mode=darkMode';
    });

    moonIcon.addEventListener('click', () => {
        //update mode and refer to correct url page for that mode
        localStorage.setItem('mode', 'lightMode');
        window.location.href = 'index.html?mode=lightMode';
    });

});

