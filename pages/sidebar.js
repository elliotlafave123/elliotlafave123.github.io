const clearAll = () => {
	document.querySelectorAll(`ol li a`).forEach((el) => {
		el.parentElement.classList.remove("active");
	});
};

const hideSidebar = () => {
	document.querySelector(".article__sidebar").classList.add("invisible");
};
const showSidebar = () => {
	document.querySelector(".article__sidebar").classList.remove("invisible");
};

window.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute("id");
			if (entry.intersectionRatio > 0) {
				document.querySelector(`ol li a[href="#${id}"]`).parentElement.classList.add("active");
			} else {
				document.querySelector(`ol li a[href="#${id}"]`).parentElement.classList.remove("active");
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll("div[id]").forEach((section) => {
		observer.observe(section);
	});
});

var myInterval = setInterval(function () {
	let sectionHovered = false;
	console.log(document.querySelectorAll(`ol li a`)[0].parentElement.classList.contains("active"));
	document.querySelectorAll(`ol li a`).forEach((el) => {
		if (el.parentElement.classList.contains("active")) {
			sectionHovered = true;
		}
	});

	if (sectionHovered) {
		showSidebar();
	} else {
		hideSidebar();
	}
}, 50);
