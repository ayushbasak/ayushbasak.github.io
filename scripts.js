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

/**
 * Theme Controller
*/


const container = document.getElementsByClassName('container');
const theme = document.getElementsByClassName('theme');

let darkTheme = false;

theme[0].addEventListener('click', function() {
    if(darkTheme) {
        container[0].style.filter = 'grayscale(1)';
        document.body.style.background = "#fff";
    }
    else{
        container[0].style.filter = 'grayscale(1) invert(1)';
        document.body.style.background = "#000";
    }
    //toggle darktheme
    darkTheme = !darkTheme;
})