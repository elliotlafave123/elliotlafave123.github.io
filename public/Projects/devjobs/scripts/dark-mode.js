const slider = document.getElementById("checkboxSlider");
const root = document.documentElement;
const toggle = document.querySelector(".toggle");

const setMode = () => {
	if (toggle.checked) {
		localStorage.setItem("dark-mode", "true");

		root.style.setProperty("--color-background", "#121721");
		root.style.setProperty("--white", "#19202D");
		root.style.setProperty("--dark-blue", "#ffffff");
		root.style.setProperty("--grey-dark", "#9DAEC2");
		root.style.setProperty("--btn-text", "#ffffff");
	} else {
		localStorage.setItem("dark-mode", "false");

		root.style.setProperty("--color-background", "#f4f6f8");
		root.style.setProperty("--white", "#ffffff");
		root.style.setProperty("--dark-blue", "#19202d");
		root.style.setProperty("--grey-dark", "rgb(110, 128, 152)");
		root.style.setProperty("--btn-text", "#5964e0");
	}
};

const initDarkMode = () => {
	const data = localStorage.getItem("dark-mode");

	if (data === null) {
		toggle.checked = false;
		localStorage.setItem("dark-mode", "false");
		setMode();
	} else if (data === "true") {
		toggle.checked = true;
		setMode();
	} else if (data === "false") {
		toggle.checked = false;
		setMode();
	}
};
initDarkMode();

toggle.addEventListener("change", () => {
	setMode();
});
