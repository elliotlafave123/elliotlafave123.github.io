const signUpButton = document.getElementById("signUpButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fullName = document.getElementById("fullname");

const API_URL = "https://elliotapiserver.co.uk/Auth/signup";

const state = {
	errorMessage: undefined,
	errorHidden: true,
};

signUp = async () => {
	if (!signUpButton) return;

	let data = {
		fullName: fullName.value,
		email: email.value,
		password: password.value,
	};

	try {
		let res = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (res.status === 201) {
			localStorage.setItem("EmailToVerify", data.email);
			window.location.replace("../../pages/Login/verifyEmail.html");
		} else {
			state.errorHidden = false;
			setTimeout(() => {
				state.errorHidden = true;
			}, 5000);
		}
	} catch (error) {
		state.errorMessage = error.message;
		state.errorHidden = false;
		setTimeout(() => {
			state.errorHidden = true;
		}, 5000);
	}
};

if (signUpButton) {
	signUpButton.addEventListener("click", (e) => {
		e.preventDefault();
		signUp();
	});
}
