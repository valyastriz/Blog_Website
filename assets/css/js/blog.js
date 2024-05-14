//get data from form from local storage
const formData = JSON.parse(localStorage.getItem('formData'));

const posted = document.createElement('article');
posted.classList.add('posted');

const title = document.createElement('h2');
title.textContent= `${formData.title};`
title.classList.add('blogTitle');

const horisontalLine = document.createElement('hr');
horisontalLine.classList.add('horisontalLine');

const content = document.createElement('p');
content.textContent = `${formData.content}`;
content.classList.add('blogContent');

const author = document.createElement('p');
author.textContent = `${formData.username}`;
content.classList.add('author');
