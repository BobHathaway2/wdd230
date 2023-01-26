const myBtn = document.getElementById("myBtn");
const myName = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const rating = document.getElementById("r");
const userDataCards = document.querySelector('.card');
const discoverMainDiv = document.querySelector(".discoverMainDiv");
const myForm = document.getElementById("myForm");
const yourForm = document.getElementById("yourForm");
const tdName = document.getElementById("tdName");
const tdEmail = document.getElementById("tdEmail");
const tdRating = document.getElementById("tdRating");
const tdPW = document.getElementById("tdPassword");

function handleForm(event) { 
    event.preventDefault(); 
    tdName.innerHTML = myName.value;
    tdEmail.innerHTML = email.value;
    tdPW.innerHTML = password1.value;
    tdRating.innerHTML = ratingValue.innerText;
    yourForm.style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
} 
myForm.addEventListener('submit', handleForm);


