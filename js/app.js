const triggerMenu = document.getElementById('triggerMenu');
const hamburger = document.querySelector('#triggerMenu .hamburger');
const menu = document.getElementById('menu');
const body = document.querySelector('body');

triggerMenu.onclick = () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-active');
    body.classList.toggle('hidden-x');
}