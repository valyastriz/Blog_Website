document.addEventListener('DOMContentLoaded', function() {

    //check for current light/dark mode setting and set it up
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode') || localStorage.getItem('mode') || 'lightMode';

    document.getElementById('blogFormContainer').addEventListener('submit', function(event) {
    event.preventDefault();//prevent auto form submission since we're using local storage instead
    
    
    //gather info from the form 
    const formData = new FormData(this);
    const formDataObject= {}; //create empty object to store the data in
    
    for (const [key, value] of formData.entries()) {
        formDataObject[key]= value;
    }
    

    //generate unique key for each post using timestamp
    const timestamp = Date.now();
    const key = `formData_${timestamp}`;

    //storing the formdata in local storage
    localStorage.setItem(key, JSON.stringify(formDataObject));
    
    //redirecting the user to the bloposts page
    window.location.href = 'blog.html';
    
    
    });
});



