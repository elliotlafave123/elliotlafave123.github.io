const storeBackLinkButton = document.querySelectorAll(".storeBackLink");

storeBackLinkButton.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		localStorage.setItem("backLink", window.location.href);
		window.location.replace(el.href);
	});
});
