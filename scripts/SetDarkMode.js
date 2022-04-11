if (!localStorage.getItem("newUser")) {
	localStorage.setItem("newUser", "true");
	localStorage.setItem("darkMode", "true");
}

const toggle = document.querySelector(".toggle");

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		localStorage.setItem("darkMode", "true");
	} else {
		console.log("Light Mode");
		localStorage.setItem("darkMode", "false");
	}
});
