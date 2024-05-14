document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const headerBorder = document.getElementById('lightBorderHeader')



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

    });


    //if moon is clicked, set body to lightmode, make moon invivisbl and make sun visible 


    // function toggleMode() {
    //     if (checkScreenMode === 'light') {
            
    //     }
    //     document.body.classList.toggle('lightMode');
    //     document.body.classList.toggle('darkMode');
    //     sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline-block' : 'none';
    //     moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline-block' : 'none';
    // }

});



