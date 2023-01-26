const kp1 = document.querySelector("#password1");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Oops those passwords don't match";
		message.style.display = "block";
		message.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp1.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "lightgrey";
		kp2.style.color = "#000";
	}
}
