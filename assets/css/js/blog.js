document.addEventListener('DOMContentLoaded', function() {
    
    //iterate over all the objects in local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('formData_')) {
            
            //get data from form from local storage and apply styling
            const formData = JSON.parse(localStorage.getItem(key));

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
            content.classList.add('author');

            //appending new elements to the new article section
            posted.appendChild(title);
            posted.appendChild(horizontalLine);
            posted.appendChild(content);
            posted.appendChild(author);

            //appened article section to blog page 
            //create reference to main
            const main = document.querySelector('main');

            //insert new article section at TOP of the page
            main.insertBefore(posted, main.firstChild);
            
        }
    }

    //make back arrow link to html page
    const backArrow = document.getElementById('backArrow');
    backArrow.addEventListener('click', function() {
        window.location.href = 'index.html';
    })
});


