const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
// const cards = document.querySelector('#directoryMainDiv');

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
}); 

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
}); 