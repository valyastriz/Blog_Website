document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('blogFormContainer').addEventListener('submit', function(event) {
        event.preventDefault();//prevent auto form submission since we're using local storage instead
    
    
    //gather info from the form 
    const formData = new FormData(this);
    const formDataObject= {}; //create empty object to store the data in
    
    for (const [key, value] of formData.entries()) {
        formDataObject[key]= value;
    }
    
    //storing the formdata in local storage
    localStorage.setItem('formData', JSON.stringify(formDataObject));
    
    //redirecting the user to the bloposts page
    window.location.href = 'blog.html';
    
    
    });
});



