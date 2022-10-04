const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");

const API_URL = "https://elliotapiserver.co.uk/Auth/login";

const state = {
	errorMessage: undefined,
	errorHidden: true,
};

login = async () => {
	if (!loginButton) return;

	let data = {
		email: email.value,
		password: password.value,
	};

	try {
		await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((data) => {
				if (data.status === 404) throw new Error("No user with that email");
				if (data.status === 401) throw new Error("Incorrect password");
				return data.json();
			})
			.then(async (JsonData) => {
				localStorage.setItem("EmailToVerify", data.email);
				localStorage.setItem("token", JsonData.ACCESS_TOKEN);
				window.location.replace("../../index.html");
			});
	} catch (error) {
		state.errorMessage = error.message;
		state.errorHidden = false;
		setTimeout(() => {
			state.errorHidden = true;
		}, 5000);
	}
};

if (loginButton) {
	loginButton.addEventListener("click", (e) => {
		e.preventDefault();
		login();
	});
}
