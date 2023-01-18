const visitsElement = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visit-count"));
	visitsElement.textContent = `Visit Count: ${visitCount}`;
visitCount++;
localStorage.setItem("visit-count", visitCount);