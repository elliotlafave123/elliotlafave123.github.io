if (localStorage.getItem("ClosedTooltipDarkMode") !== "true") {
	localStorage.setItem("ClosedTooltipDarkMode", "false");
} else {
	document.querySelector(".tooltip").classList.add("invisible");
}

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("closeTooltip")) {
		e.target.closest(".tooltip").classList.add("invisible");
		localStorage.setItem("ClosedTooltipDarkMode", "true");
	}
});
