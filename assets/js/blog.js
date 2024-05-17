document.addEventListener('DOMContentLoaded', function() {

    // check for current light/dark mode setting and set it up
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode') || localStorage.getItem('mode') || 'lightMode';
    const blogAreaElement = document.querySelector('.blogArea');
    //empty array to store articles
    const articles = JSON.parse(localStorage.getItem("articles")) || [];

    //puts the stuff form the form in an array
    
    let blogCard = '';
    //iterate over all the objects in local storage
    for (let i = 0; i < articles.length; i++) {
        blogCard += `
        <div class="blog-card">
        <h2>${articles[i].title}</h2>
        <hr>
        <p class="content">${articles[i].content}</p>
        <p>${articles[i].username}</p>
        </div>
        `
        blogAreaElement.innerHTML = blogCard;
    }

    //sorting articles by timestamp
    articles.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    // make back arrow link to html page
    const backArrow = document.getElementById('backArrow');
    backArrow.addEventListener('click', function(event) {
        event.stopPropagation();
        window.location.href = 'index.html';
    })


});



