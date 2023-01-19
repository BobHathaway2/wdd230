const visitsElement = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visit-count"));
visitCount++;
localStorage.setItem("visit-count", visitCount);
if (visitCount == 1) {
    visitsElement.textContent = 'Visit Count: Your FIRST visit!';
} else {
    visitsElement.textContent = `Visit Count: ${visitCount}`;
}