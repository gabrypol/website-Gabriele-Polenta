// DOM items
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');
const menuPortrait = document.querySelector('.menu-portrait');

// Set menu initial state
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPortrait.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // Re-set menu state
        showMenu = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPortrait.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // Re-set menu state
        showMenu = false;


    }
}