if (!localStorage.getItem("newUser")) {
	localStorage.setItem("newUser", "true");
	localStorage.setItem("darkMode", "true");
}

const toggle = document.getElementById("darkmodetoggle");
const root = document.documentElement;

const wave5Light = document.getElementById("wave5-light");

const wave5Dark = document.getElementById("wave5-dark");

let DarkModeActive = true;
const lightMode = function () {
	DarkModeActive = false;
	console.log("Light Mode");
	toggle.innerHTML = `<i class="fa-solid fa-sun"></i>
    Light Mode`;

	// Color changes
	root.style.setProperty("--color-background", "#FAFAFA");
	root.style.setProperty("--color-header", "#ffffff");
	root.style.setProperty("--text-light", "#000000");
	root.style.setProperty("--color-card", "#ffffff");
};

const darkMode = function () {
	DarkModeActive = true;
	console.log("Dark Mode");
	toggle.innerHTML = `<i class="fa-solid fa-moon"></i>
    Dark Mode`;

	// Color changes
	root.style.setProperty("--color-background", "#202c36");
	root.style.setProperty("--color-header", "#2b3844");
	root.style.setProperty("--text-light", "#ffffff");
	root.style.setProperty("--color-card", "#2b3844");
};

if (localStorage.getItem("darkMode") == "true") {
	toggle.checked = true;
}

if (localStorage.getItem("darkMode") == "true") {
	darkMode();
} else {
	lightMode();
}

toggle.addEventListener("click", () => {
	if (!DarkModeActive) {
		darkMode();
		localStorage.setItem("darkMode", "true");
	} else {
		lightMode();
		localStorage.setItem("darkMode", "false");
	}
});
