export const logOut = async () => {
	const token = localStorage.getItem("token");
	await fetch("https://elliotapiserver.co.uk/Auth/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: token }),
	});
	localStorage.setItem("token", "");
	const backLinkUrl = localStorage.getItem("backLink") || "../../index.html";
	window.location.replace(backLinkUrl);
};
