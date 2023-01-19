const visitsElement = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visit-count"));
visitCount++;
visitsElement.textContent = `Visit Count: ${visitCount}`;
localStorage.setItem("visit-count", visitCount);