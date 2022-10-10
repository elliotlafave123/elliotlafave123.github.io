const pinBox = document.getElementById("pinBox");
const pinInput = document.getElementById("pinInput");
const loadingSpinnerContainer = document.querySelector(".spinner-container");
const loadingSpinner = document.getElementById("loadingSpinner");
const resendCodeButton = document.getElementById("resendCodeButton");
const resendCodeContainer = document.getElementById("resendCodeContainer");

loadingSpinner.style.display = "none";

const state = {
	errorMessage: undefined,
	errorHidden: true,
};

if (!localStorage.getItem("EmailToVerify")) {
	let backLinkUrl = localStorage.getItem("backLink") || "../../index.html";
	window.location.replace(backLinkUrl);
}

const API_URL = "https://elliotapiserver.co.uk/Auth";
verifyEmail = async () => {
	const Data = {
		email: localStorage.getItem("EmailToVerify"),
		code: pinInput.value.toString(),
	};

	try {
		let res = await fetch(API_URL + "/VerifyEmail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(Data),
		});
		console.log(res);
		if (res.status === 200) {
			localStorage.setItem("EmailToVerify", "");
			window.location.replace("../../pages/Login/login.html");
		} else if (res.status === 301) {
			data.code = "";
			throw new Error("Incorrect Verification Code");
		} else if (res.status === 404) {
			await router.push("./signUp.js");
		}
	} catch (error) {
		loadingSpinner.style.display = "none";
		state.errorHidden = false;
		state.errorMessage = error.message;
		setTimeout(() => {
			state.errorHidden = true;
		}, 5000);
		setTimeout(() => {
			state.formShown = true;
		}, 400);
	}
};

checkPinInput = () => {
	console.log(pinInput.value.length);
	if (pinInput.value.length === 4) {
		pinBox.style.display = "none";
		loadingSpinner.style.display = "block";
		loadingSpinnerContainer.style.display = "flex";
		resendCodeContainer.innerHTML = " ";
		verifyEmail();
	}
};

if (pinInput) {
	pinInput.addEventListener("keydown", (e) => {
		if (!Number.isInteger(parseInt(e.key)) && e.keyCode !== 8) {
			e.preventDefault();
		}
	});
	pinInput.addEventListener("keyup", (e) => {
		checkPinInput();
	});
}

// Resend code
resendCodeButton.addEventListener("click", (e) => {
	e.preventDefault();

	resendEmail();
});

const resendEmail = async () => {
	try {
		let data = {
			email: localStorage.getItem("EmailToVerify"),
		};
		let res = await fetch(API_URL + "/ResendEmail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (res.status === 201) {
			console.log("code sent");
			resendCodeContainer.innerHTML = "Code Sent!";
		} else if (res.status === 500) {
			throw new Error("Cannot resend verification code, please try again later.");
		} else if (res.status === 404) {
			throw new Error("No user with that email");
		}
	} catch (error) {}
};
