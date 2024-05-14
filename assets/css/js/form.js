document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();//prevent auto form submission since we're using local storage instead


//gather info from the form 
const formData = new FormData(this);
const formDataObject= {}; //create empty object to store the data in
formData.foreach.setItem('formData', JSON.stringify(formDataObject));

//storing the formdata in local storage
localStorage.setItem('formData', JSON.stringify(formDataObject));

//redirecting the user to the bloposts page
window.location.href = 'blog.html';


});