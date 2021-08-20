document.getElementById('about').style.display = 'block';

const nav_projects = document.getElementById('nav-projects');
const nav_about = document.getElementById('nav-about');
const nav_interests = document.getElementById('nav-interests');

const content = document.getElementsByClassName('content')

nav_projects.addEventListener('click', function() {
    for(let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    document.getElementById('projects').style.display = "block";
})

nav_about.addEventListener('click', function() {
    for(let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    document.getElementById('about').style.display = "block";
})

nav_interests.addEventListener('click', function() {
    for(let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    document.getElementById('interests').style.display = "block";
})
