const hamburgerMenu = document.querySelector('span');
const section = document.querySelector('section');

hamburgerMenu.addEventListener('click', () => {
    if (section.style.display === 'none') {
        section.style.display = 'inline';
        hamburgerMenu.innerText = 'X';
    } else {
        section.style.display = 'none';
        hamburgerMenu.class='close-menu';
        hamburgerMenu.class='material-icons md-light';
        hamburgerMenu.innerText = 'menu'
    }
})
hamburgerMenu.class='material-icons md-light';
hamburgerMenu.innerText = 'menu'
section.style.display = 'none';
