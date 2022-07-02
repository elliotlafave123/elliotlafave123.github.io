if (!localStorage.getItem("newUser")) {
	localStorage.setItem("newUser", "true");
	localStorage.setItem("darkMode", "true");
}

const deleteMobileDarkModeToggle = document.querySelector(".deleteMobile");
if (window.innerWidth < 400) {
	deleteMobileDarkModeToggle.innerHTML = "";
}

const toggle = document.querySelector(".toggle");
const slider = document.getElementById("checkboxSlider");
const root = document.documentElement;

const wave5Light = document.getElementById("wave5-light");

const wave5Dark = document.getElementById("wave5-dark");

const lightMode = function () {
	root.style.setProperty("--color-grey--extra-dark", "rgba(84, 97, 102, 0.3)");
	root.style.setProperty("--color-grey-dark", "#F2F2F2");
	root.style.setProperty("--color-grey-dark-2", "#CED4DA");

	root.style.setProperty("--color-card", "#d6dadd");
	root.style.setProperty("--color-card-dark", "#d6dadd");

	root.style.setProperty("--text-light", "#212529");
	root.style.setProperty("--text-dark", "#212529");

	root.style.setProperty("--color-footer", "#7048e8");

	root.style.setProperty("--color-tag", "#DEE2E6");

	wave5Dark.classList.add("hidden");

	wave5Light.classList.remove("hidden");
};

const darkMode = function () {
	root.style.setProperty("--color-grey--extra-dark", "#15181991");

	root.style.setProperty("--color-grey-dark", "#212529");
	root.style.setProperty("--color-grey-dark-2", "#343a40");

	root.style.setProperty("--color-card", "#343a40");
	root.style.setProperty("--color-card--dark", "#212529");

	root.style.setProperty("--text-light", "#CED4DA");
	root.style.setProperty("--text-dark", "#212529");

	root.style.setProperty("--color-footer", "#101214");

	root.style.setProperty("--color-tag", "#495057");

	wave5Dark.classList.remove("hidden");

	wave5Light.classList.add("hidden");
};

if (localStorage.getItem("darkMode") == "true") {
	toggle.checked = true;
}

if (localStorage.getItem("darkMode") == "true") {
	darkMode();
} else {
	lightMode();
}

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		darkMode();
		localStorage.setItem("darkMode", "true");
	} else {
		lightMode();
		localStorage.setItem("darkMode", "false");
	}
});
