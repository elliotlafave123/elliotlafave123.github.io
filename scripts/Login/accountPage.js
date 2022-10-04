let token = localStorage.getItem("token");
const API_URL = "https://elliotapiserver.co.uk/Auth";
const logOutButton = document.getElementById("logOutButton");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

checkLogin = async () => {
	try {
		const res = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: token }),
		});
		if (res.status === 201) {
			const data = await res.json();
			console.log(data);
			fullName.innerText = data.data.fullName;
			email.innerText = data.data.email;
		} else {
			throw new Error("Not Authenticated");
		}
	} catch (e) {
		window.location.replace("../../index.html");
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
	window.location.replace("../../index.html");
};

if (logOutButton) {
	logOutButton.addEventListener("click", (e) => {
		e.preventDefault();
		logOut();
	});
}
