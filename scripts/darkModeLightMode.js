const modeButton = document.querySelector("#darkLightMode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const mainDiv = document.querySelector(".mainDiv");
const card = document.querySelectorAll(".card");
const p = document.querySelectorAll(".modeClass");
const a = document.querySelectorAll("a");
const menuItem = document.querySelectorAll(".menuItem");
const dark = 'images/darkmode.png';
const light = 'images/lightmode.png';
const altDark = 'dark mode icon';
const altLight = 'light mode icon';

modeButton.addEventListener("click", () => {
	if (modeButton.alt == altDark) {
        body.style.background = "black";
		main.style.background = "black";
		main.style.color = "white";
        mainDiv.style.color = "black";
        card.forEach((cardOutline) => {
            cardOutline.style.boxShadow = "0 0 10px white"
        })
        a.forEach((anch) => {
            anch.style.color = "white";
        })
        menuItem.forEach((anch) => {
            anch.style.color = "white";
        })
        p.forEach((ele) => {
            ele.style.color = "white";
        })
		modeButton.src = light;
        modeButton.alt = altLight;
	} else {
		main.style.background = "white";
		main.style.color = "black";
        mainDiv.style.color = "black";
        body.style.background = "white";
        card.forEach((cardOutline) => {
            cardOutline.style.boxShadow = "0 0 10px black"
        })
        a.forEach((anch) => {
            anch.style.color = "-webkit-link";
        })
        menuItem.forEach((anch) => {
            anch.style.color = "white";
        })
        p.forEach((ele) => {
            ele.style.color = "black";
        })
		modeButton.src = dark;
        modeButton.alt = altDark;
	}
}); 
