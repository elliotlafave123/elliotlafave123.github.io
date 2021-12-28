const toggle = document.querySelector(".toggle");
const slider = document.getElementById("checkboxSlider");
const root = document.documentElement;

const wave1Light = document.getElementById("wave1-light");
const wave2Light = document.getElementById("wave2-light");
const wave3Light = document.getElementById("wave3-light");
const wave4Light = document.getElementById("wave4-light");
const wave5Light = document.getElementById("wave5-light");

const wave1Dark = document.getElementById("wave1-dark");
const wave2Dark = document.getElementById("wave2-dark");
const wave3Dark = document.getElementById("wave3-dark");
const wave4Dark = document.getElementById("wave4-dark");
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

	wave1Dark.classList.add("hidden");
	wave2Dark.classList.add("hidden");
	wave3Dark.classList.add("hidden");
	wave4Dark.classList.add("hidden");
	wave5Dark.classList.add("hidden");

	wave1Light.classList.remove("hidden");
	wave2Light.classList.remove("hidden");
	wave3Light.classList.remove("hidden");
	wave4Light.classList.remove("hidden");
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

	wave1Dark.classList.remove("hidden");
	wave2Dark.classList.remove("hidden");
	wave3Dark.classList.remove("hidden");
	wave4Dark.classList.remove("hidden");
	wave5Dark.classList.remove("hidden");

	wave1Light.classList.add("hidden");
	wave2Light.classList.add("hidden");
	wave3Light.classList.add("hidden");
	wave4Light.classList.add("hidden");
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
