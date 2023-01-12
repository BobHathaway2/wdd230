const hamburgerMenu = document.querySelector('span');
const menuItems = document.querySelector('section');

hamburgerMenu.addEventListener('click', () => {
    if (menuItems.style.display === 'none') {
        menuItems.style.display = 'inline';
        hamburgerMenu.textContent = 'X';
        } else 
        if (menuItems.style.display = 'inline') {
        menuItems.style.display = 'none';
        hamburgerMenu.textContent = '≡';
    }
})
menuItems.style.display = 'none';