document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const headerBorder = document.getElementById('lightBorderHeader')

    //check for current setting of light/dark
    const currentMode = localStorage.getItem('mode');
    if (mode) {
        body.classList.add('mode');
        if (mode === 'lightMode') {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
            headerBorder.classList.add('lightBorderHeader');
        }
        else if (mode === 'darkMode') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-blockinline-block';
            headerBorder.classList.add('darkBorderHeader');
        }
    
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
        // //change border colors
        headerBorder.classList.remove('lightBorderHeader');
        headerBorder.classList.add('darkBorderHeader');
        localStorage.setItem('mode', 'lightMode');
    });

    moonIcon.addEventListener('click', () => {
        //change the light/dark mode
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        //change sun/moon
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        // //change border colors
        headerBorder.id.remove('darkHeaderBorder');
        headerBorder.id.add('lightHeaderBorder');
        localStorage.setItem('mode', 'darkMode');
    });





