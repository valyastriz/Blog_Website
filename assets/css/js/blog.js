document.addEventListener('DOMContentLoaded', function() {
    
    // check for current light/dark mode setting and set it up
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode') || localStorage.getItem('mode') || 'lightMode';

    //empty array to store articles
    const articles = [];


    //iterate over all the objects in local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('formData')) {
            const formData = JSON.parse(localStorage.getItem(key));
            const posted = createArticle(formData);
            articles.push(posted);
        }
    }

    //sorting articles by timestamp
    articles.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    //display the sorted blog posts on the page 
    const main = document.querySelector('main');
    articles.forEach(article =>{
        //get data from form from local storage and apply styling
        const posted = document.createElement('article');
        posted.classList.add('posted');

        const title = document.createElement('h2');
        title.textContent= `${formData.title}`;
        title.classList.add('blogTitle');

        const horizontalLine = document.createElement('hr');
        horizontalLine.classList.add('horisontalLine');

        const content = document.createElement('p');
        content.textContent = `${formData.content}`;
        content.classList.add('blogContent');

        const author = document.createElement('p');
        author.textContent = `${formData.username}`;
        author.classList.add('author');

        //appending new elements to the new article section
        posted.appendChild(title);
        posted.appendChild(horizontalLine);
        posted.appendChild(content);
        posted.appendChild(author);

        //appened article section to blog page 
        //create reference to main
        const main = document.querySelector('main');

        //insert new article section at TOP of the page
        main.appendChild(posted);
        
    });


    //make back arrow link to html page
    const backArrow = document.getElementById('backArrow');
    backArrow.addEventListener('click', function() {
        window.location.href = 'index.html';
    })
});


