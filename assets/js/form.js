document.addEventListener('DOMContentLoaded', function() {

    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    const blogFormContainer = document.querySelector("#blogFormContainer");

    blogFormContainer.addEventListener("submit", validateForm);

    function validateForm(event) {
        event.preventDefault();
        const titleElement = document.querySelector("#title").value;
        const usernameElement = document.querySelector("#username").value;
        const contentElement = document.querySelector("#content").value;

        //checking to make sure all the fields are filled out
        if (titleElement.trim() === '' || usernameElement.trim() === '' || contentElement.trim() === '') {
            alert('Please fill out all fields.');
            return false;
        }
        //return true if form is valid
        else {
            saveArticle(titleElement, usernameElement, contentElement);
        }

    }

    function saveArticle(titleElement, usernameElement, contentElement) {
        const newArticle = {
            username:usernameElement,
            title:titleElement,
            content:contentElement
        }
        articles.push(newArticle)
        localStorage.setItem("articles",JSON.stringify(articles));
        window.location.href = 'blog.html';
    }
    
});



