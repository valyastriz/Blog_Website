# Personal Blog Website

## Description

This project is a two-page personal blog website created to showcase thoughts and experiences. The website includes a landing page with a form to submit blog posts and a posts page where the submitted posts are displayed. It features a light/dark mode settings that can be controlled by clicking on the Sun or Moon icons and stores blog post data in localStorage.

## User Story

AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.

## Acceptance Criteria

GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.

## Features

- Landing Page: Contains a form with labels and inputs for username, blog title, and blog content.
- Form Validation: Ensures all fields are filled out before submission.
- LocalStorage Integration: Stores blog post data in localStorage.
- Redirection: Automatically redirects to the posts page upon successful form submission.
- Posts Page: Displays a list of blog posts pulled from localStorage.
- Light/Dark Mode Toggle: Allows users to switch between light and dark mode.
- Back Button: Redirects users back to the landing page from the posts page.
- Modern Layout: Neutral colors and a sleek, modern design.
- Developer Portfolio Link: Footer includes a link to the developer's portfolio.

## Installation

1. Clone the repository: git clone https://github.com/valyastriz/Blog_Website.git
2. Navigate to the project directory:
   cd personal-blog
3. Open `index.html` in your web browser to view the landing page.
4. Alternatively, you can visit the deployed site at [Blog Website](https://valyastriz.github.io/Blog_Website/)

## Usage

1. On the landing page, fill out the form with your username, blog title, and blog content.
2. Click the "Submit" button to save the blog post to localStorage and be redirected to the posts page.
3. On the posts page, click on the Sun/Moon icons to toggle between light and dark themes.
4. Click the "Back" button to return to the landing page and submit more blog entries.
![Image of Form Page in Light Mode](./assets/images/Form%20Page%20Light%20Mode.png)
![Image of Blog Page in Light Mode](./assets/images/Blog%20Page%20Light%20Mode.png)
![Image of Form Page in Dark Mode](./assets/images/Form%20Page%20Dark%20Mode.png)
![Image of Blog Page in Dark Mode](./assets/images/Blog%20Page%20Dark%20Mode.png)


## Acknowledgements

I would like to thank the following individuals and resources for their help and inspiration:

- **Rene Trevino** - For helping with debugging and troubleshooting.
- **ChatGPT** - For helping write this README.

