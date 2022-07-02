let darkModeState = {
	isDarkMode: true,
};

if (!localStorage.getItem("newUser")) {
	localStorage.setItem("newUser", "true");
	localStorage.setItem("darkMode", "true");
}

// const toggle = document.querySelectorAll(".toggle");

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		localStorage.setItem("darkMode", "true");
	} else {
		localStorage.setItem("darkMode", "false");
	}
});
