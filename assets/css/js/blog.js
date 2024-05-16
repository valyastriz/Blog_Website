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
        <p>${articles[i].content}</p>
        <p>${articles[i].username}</p>
        </div>
        `
        blogAreaElement.innerHTML = blogCard;
    }

    //sorting articles by timestamp
    articles.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
    
    // const main = document.querySelector('main');
    // articles.forEach(formData => {
    //     posted = document.createElement('article');
    //     main.appendChild(posted);
    //     posted.classList.add('posted');
    // });

    //display the sorted blog posts on the page 
    // function createArticle(formData, posted) {
            
    //     const title = document.createElement('h2');
    //     title.textContent= `${formData.title}`;
    //     title.classList.add('blogTitle');

    //     const horizontalLine = document.createElement('hr');
    //     horizontalLine.classList.add('horisontalLine');

    //     const content = document.createElement('p');
    //     content.textContent = `${formData.content}`;
    //     content.classList.add('blogContent');

    //     const author = document.createElement('p');
    //     author.textContent = `${formData.username}`;
    //     author.classList.add('author');

    //     //appending new elements to the new article section
    //     posted.appendChild(title);
    //     posted.appendChild(horizontalLine);
    //     posted.appendChild(content);
    //     posted.appendChild(author);

    //     //appened article section to blog page 
    //     //create reference to main
    //     const main = document.querySelector('main');

    //     //insert new article section at TOP of the page
    //     main.appendChild(posted);
    // }


    //make back arrow link to html page
    // const backArrow = document.getElementById('backArrow');
    // backArrow.addEventListener('click', function() {
    //     window.location.href = 'index.html';
    // })

    
});



