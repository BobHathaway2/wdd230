const mybtn = document.querySelector('nav button')
const mynav = document.querySelector('nav')
const section = document.querySelector('section');


mybtn.addEventListener('click', () => {
    mynav.classList.toggle('open')
    mybtn.classList.toggle('open')
    section.classList.toggle('open')
});