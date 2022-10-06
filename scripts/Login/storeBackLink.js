const storeBackLinkButton = document.querySelectorAll(".storeBackLink");
const verifyEmailStripButton = document.getElementById("signedInStripWarning").querySelector("a");
const verifyEmailButton = document.getElementById("verifyEmailButton");

storeBackLinkButton.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		localStorage.setItem("backLink", window.location.href);
		window.location.replace(el.href);
	});
});

verifyEmailButton.addEventListener("click", (e) => {
	e.preventDefault();
	localStorage.setItem("backLink", window.location.href);
	window.location.replace(verifyEmailButton.href);
});

verifyEmailStripButton.addEventListener("click", (e) => {
	e.preventDefault();
	localStorage.setItem("backLink", window.location.href);
	window.location.replace(verifyEmailButton.href);
});
