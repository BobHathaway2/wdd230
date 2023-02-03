const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
let view = localStorage.getItem("view");

if (view == null) {
    cards.classList.add("list");
} else {
    cards.classList.add(view);
}


gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    localStorage.setItem("view","grid");
    cards.classList.remove("list");
}); 

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    localStorage.setItem("view","list");
    cards.classList.remove("grid");
}); 