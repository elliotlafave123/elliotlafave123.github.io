const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessageEnterPassword = document.getElementById("errorMessageEnterPassword");

const API_URL = "https://elliotapiserver.co.uk/Auth/login";

const state = {
	errorMessage: undefined,
	errorHidden: true,
	inputErrors: {
		email: false,
		password: false,
		enterPassword: false,
	},
};

verifyEmail = () => {
	// Validate email
	email.value == "" ? (state.inputErrors.email = true) : (state.inputErrors.email = false);
	var filter =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	filter.test(email.value) ? (state.inputErrors.email = false) : (state.inputErrors.email = true);
	displayErrors();
	return filter.test(email.value);
};

login = async () => {
	if (!loginButton) return;
	if (!verifyEmail()) return;
	if (password.value === "") {
		state.inputErrors.enterPassword = true;
		state.inputErrors.password = false;
		displayErrors();
		return;
	}

	console.log("logging in");

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
				window.location.replace(localStorage.getItem("backLink"));
			});
	} catch (error) {
		if ((error.message = "Incorrect password")) {
			state.inputErrors.enterPassword = false;
			state.inputErrors.password = true;
			displayErrors();
		}
	}
};

if (loginButton) {
	loginButton.addEventListener("click", (e) => {
		e.preventDefault();
		displayErrors();
		login();
	});
}

const errorMessageEmail = document.getElementById("errorMessageEmail");
const errorMessagePassword = document.getElementById("errorMessagePassword");

displayErrors = () => {
	state.inputErrors.email ? (errorMessageEmail.style.display = "block") : (errorMessageEmail.style.display = "none");
	state.inputErrors.password ? (errorMessagePassword.style.display = "block") : (errorMessagePassword.style.display = "none");
	state.inputErrors.enterPassword
		? (errorMessageEnterPassword.style.display = "block")
		: (errorMessageEnterPassword.style.display = "none");
};

// if user is logged in return to previous page
let token = localStorage.getItem("token");
const checkLogin = async () => {
	try {
		const res = await fetch("https://elliotapiserver.co.uk/Auth", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: token }),
		});
		console.log(res);
		if (res.status === 201) {
			window.location.replace(localStorage.getItem("backLink"));
		}
	} catch (e) {
		// do nothing
	}
};
checkLogin();
