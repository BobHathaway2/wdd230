// const menuItems = document.querySelectorAll('.menu-item');
const hamburgerMenu = document.querySelector('span');
const section = document.querySelector('section');

hamburgerMenu.addEventListener('click', () => {
    if (section.style.display === 'none') {
        section.style.display = 'inline';
    } else {
        section.style.display = 'none';
    }
})
section.style.display = 'none';