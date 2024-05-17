document.addEventListener('DOMContentLoaded', function() {

    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    const blogFormContainer = document.querySelector("#blogFormContainer");

    function saveArticle(event) {
        event.preventDefault();
        const titleElement = document.querySelector("#title").value;
        const usernameElement = document.querySelector("#username").value;
        const contentElement = document.querySelector("#content").value;
        const newArticle = {
            username:usernameElement,
            title:titleElement,
            content:contentElement
        }
        articles.push(newArticle)
        localStorage.setItem("articles",JSON.stringify(articles));
        window.location.href = 'blog.html';
    }

    blogFormContainer.addEventListener("submit",saveArticle);
});



