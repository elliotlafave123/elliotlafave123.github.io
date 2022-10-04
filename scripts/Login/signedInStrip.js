let token = localStorage.getItem("token");
const API_URL = "https://elliotapiserver.co.uk/Auth";
const signedInStrip = document.getElementById("signedInStrip");
const logOutButton = document.getElementById("logOutButton");

checkLogin = async () => {
	try {
		const res = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: token }),
		});
		if (res.status === 201) {
			const data = await res.json();
			if (signedInStrip && data.data.emailVerified) signedInStrip.classList.add("shown");
		} else {
			throw new Error("Not Authenticated");
		}
	} catch (e) {
		// do nothing
	}
};
checkLogin();

logOut = async () => {
	await fetch("https://elliotapiserver.co.uk/Auth/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: token }),
	});
	localStorage.setItem("token", "");
	if (signedInStrip) signedInStrip.classList.remove("shown");
};

if (logOutButton) {
	logOutButton.addEventListener("click", (e) => {
		e.preventDefault();
		logOut();
	});
}
