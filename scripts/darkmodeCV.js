const toggle = document.querySelector(".toggle");
const slider = document.getElementById("checkboxSlider");
const root = document.documentElement;

const wave5Light = document.getElementById("wave5-light");

const wave5Dark = document.getElementById("wave5-dark");

const lightMode = function () {
	console.log("Light Mode");

	root.style.setProperty("--color-grey-dark", "#F2F2F2");
	root.style.setProperty("--color-grey-dark-2", "#CED4DA");

	root.style.setProperty("--color-card", "#E9ECEF");
	root.style.setProperty("--color-card-dark", "#E9ECEF");

	root.style.setProperty("--text-light", "#212529");
	root.style.setProperty("--text-dark", "#212529");

	root.style.setProperty("--color-footer", "#7048e8");

	wave5Dark.classList.add("hidden");

	wave5Light.classList.remove("hidden");
};

const darkMode = function () {
	console.log("Dark Mode");

	root.style.setProperty("--color-grey-dark", "#212529");
	root.style.setProperty("--color-grey-dark-2", "#343a40");

	root.style.setProperty("--color-card", "#343a40");
	root.style.setProperty("--color-card--dark", "#212529");

	root.style.setProperty("--text-light", "#CED4DA");
	root.style.setProperty("--text-dark", "#212529");

	root.style.setProperty("--color-footer", "#101214");

	wave5Dark.classList.remove("hidden");

	wave5Light.classList.add("hidden");
};

toggle.checked = true;
toggle.addEventListener("change", () => {
	if (toggle.checked) {
		darkMode();
	} else {
		console.log("Light Mode");
		lightMode();
	}
});
