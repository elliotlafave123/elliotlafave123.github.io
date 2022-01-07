const slider = document.getElementById("checkboxSlider");
const root = document;
const toggle = document.querySelector(".toggle");

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		console.log("Dark Mode");

		root.style.setProperty("--main-bg-color", "#000");
	} else {
		console.log("Light Mode");
	}
});
