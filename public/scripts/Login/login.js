const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessageEnterPassword = document.getElementById("errorMessageEnterPassword");

const API_URL = "https://elliotapiserver.co.uk/Auth/login";
// const API_URL = "http://localhost:3000/Auth/login";

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
				if (data.status === 403) throw new Error("Account locked");
				if (data.status === 401) throw new Error("Incorrect password");
				return data.json();
			})
			.then(async (JsonData) => {
				localStorage.setItem("EmailToVerify", data.email);
				localStorage.setItem("token", JsonData.ACCESS_TOKEN);
				let backLink = localStorage.getItem("backLink") || "../../index.html";
				localStorage.setItem("BacklinkShouldScroll", "true");
				window.location.replace(backLink);
			});
	} catch (error) {
		if (error.message === "Incorrect password") {
			state.inputErrors.enterPassword = false;
			state.inputErrors.password = true;
			displayErrors();
		} else if (error.message === "Account locked") {
			let markup = `
				<h1 class="none">Account Locked</h1>
				<p class="verify">Your account has been locked due to too many incorrect pin entries.</p>
				<p class="verify">Contact the site admin from your email address: ${email.value}</p>
				<p class="verify u-margin-top-medium">Click this link to email support: <a href="mailto:elliot@lafave.co.uk">elliot@lafave.co.uk</a></p>`;

			let form = document.getElementById("loginForm");
			form.innerHTML = markup;
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
		if (res.status === 201) {
			window.location.replace(localStorage.getItem("backLink"));
		}
	} catch (e) {
		// do nothing
	}
};
checkLogin();
