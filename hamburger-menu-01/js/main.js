const menuHamburger = document.getElementById('menu-hamburger');
const navList = document.getElementById('nav-list');

menuHamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuHamburger.classList.toggle('active');
})