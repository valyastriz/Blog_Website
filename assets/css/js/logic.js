const body = document.body;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getAnimations('moonIcon');


//checking current screenmode

//depending on current screen mode

// onlick
//if sunIcon is clicked, set body to darkmode, make sun invisible and make noon vivisbl
//if moon is clicked, set body to lightmode, make moon invivisbl and make sun visible 


function toggleMode() {
    if (checkScreenMode === 'light') {
        
    }
    document.body.classList.toggle('lightMode');
    document.body.classList.toggle('darkMode');
    sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline-block' : 'none';
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline-block' : 'none';
}