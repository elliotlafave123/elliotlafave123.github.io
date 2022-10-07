const signUpButton = document.getElementById("signUpButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fullName = document.getElementById("fullname");

const length = document.getElementById("length");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");

const errorMessageName = document.getElementById("errorMessageName");
const errorMessageEmail = document.getElementById("errorMessageEmail");
const errorMessagePassword = document.getElementById("errorMessagePassword");
const errorMessageCaptcha = document.getElementById("errorMessageCaptcha");

const API_URL = "https://elliotapiserver.co.uk/Auth/signup";

const state = {
	passwordChecks: {
		passwordLength: false,
		upperAndLower: false,
		number: false,
		specialCharacter: false,
	},
	inputErrors: {
		fullName: false,
		email: false,
		password: false,
		captchaVerified: false,
	},
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
	console.log(data);

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

function hasLowerCase(str) {
	return /[a-z]/.test(str);
}
function hasCapital(str) {
	return /[A-Z]/.test(str);
}
function hasNumber(str) {
	return /\d/.test(str);
}
const checkPassword = () => {
	var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	let val = password.value.toString();

	val.length >= 8 ? (state.passwordChecks.passwordLength = true) : (state.passwordChecks.passwordLength = false);
	hasLowerCase(val) && hasCapital(val) ? (state.passwordChecks.upperAndLower = true) : (state.passwordChecks.upperAndLower = false);
	hasNumber(val) ? (state.passwordChecks.number = true) : (state.passwordChecks.number = false);
	val.match(format) ? (state.passwordChecks.specialCharacter = true) : (state.passwordChecks.specialCharacter = false);
	displayPasswordTicks();
};
const validatePassword = () => {
	checkPassword();
	if (
		state.passwordChecks.passwordLength &&
		state.passwordChecks.number &&
		state.passwordChecks.upperAndLower &&
		state.passwordChecks.specialCharacter
	) {
		state.inputErrors.password = false;
		return true;
	} else {
		state.inputErrors.password = true;
		return false;
	}
};
const verifyInputs = () => {
	fullName.value == "" ? (state.inputErrors.fullName = true) : (state.inputErrors.fullName = false);
	email.value == "" ? (state.inputErrors.email = true) : (state.inputErrors.email = false);
	var filter =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	filter.test(email.value) ? (state.inputErrors.email = false) : (state.inputErrors.email = true);

	if (password.value !== "") {
		if (!validatePassword()) {
			return displayErrors();
		} else {
			displayErrors();
		}
	}

	if (!state.inputErrors.fullName && !state.inputErrors.email && validatePassword() && !signUpButton.disabled) {
		return true;
	} else {
		displayErrors();
		return false;
	}
};

displayPasswordTicks = () => {
	state.passwordChecks.passwordLength ? length.classList.add("active") : length.classList.remove("active");
	state.passwordChecks.upperAndLower ? upper.classList.add("active") : upper.classList.remove("active");
	state.passwordChecks.number ? number.classList.add("active") : number.classList.remove("active");
	state.passwordChecks.specialCharacter ? special.classList.add("active") : special.classList.remove("active");
};

displayErrors = () => {
	state.inputErrors.fullName ? (errorMessageName.style.display = "block") : (errorMessageName.style.display = "none");
	state.inputErrors.email ? (errorMessageEmail.style.display = "block") : (errorMessageEmail.style.display = "none");
	state.inputErrors.password ? (errorMessagePassword.style.display = "block") : (errorMessagePassword.style.display = "none");
	state.inputErrors.captchaVerified ? (errorMessageCaptcha.style.display = "block") : (errorMessageCaptcha.style.display = "none");
};

password.addEventListener("keyup", () => {
	validatePassword();
});

if (signUpButton) {
	signUpButton.addEventListener("click", (e) => {
		e.preventDefault();
		if (verifyInputs()) {
			signUp();
		}
	});
}
