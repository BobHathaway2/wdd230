const modeButton = document.querySelector("#darkLightMode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const dark = 'images/darkmode.png';
const light = 'images/lightmode.png';
const altDark = 'dark mode icon';
const altLight = 'light mode icon';

modeButton.addEventListener("click", () => {
	if (modeButton.alt == altDark) {
        body.style.background = "black";
		main.style.background = "black";
		main.style.color = "white";
		modeButton.src = light;
        modeButton.alt = altLight;
	} else {
        body.style.background = "white";
		main.style.background = "white";
		main.style.color = "black";
		modeButton.src = dark;
        modeButton.alt = altDark;
	}
}); 
