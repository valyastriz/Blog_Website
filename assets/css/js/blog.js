//get data from form from local storage
const formData = JSON.parse(localStorage.getItem('formData'));

const posted = document.createElement('article');
posted.classList.add('posted');
posted.innerHTML = 
    <h2 class="blogTitle">blog post title</h2>
    <hr class="horisontalLine">
    <p class="blogContent">blog content</p>
    <p class="author">author</p>