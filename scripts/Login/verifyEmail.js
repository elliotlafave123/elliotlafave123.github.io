const pinBox = document.getElementById("pinBox");
const pinInput = document.getElementById("pinInput");
const loadingSpinner = document.getElementById("loadingSpinner");

loadingSpinner.style.display = "none";

const state = {
	errorMessage: undefined,
	errorHidden: true,
};

const API_URL = "https://elliotapiserver.co.uk/Auth";
verifyEmail = async () => {
	const Data = {
		email: localStorage.getItem("EmailToVerify"),
		code: pinInput.value.toString(),
	};
	console.log(Data);

	try {
		let res = await fetch(API_URL + "/VerifyEmail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(Data),
		});
		console.log(res);
		if (res.status === 200) {
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
	if (pinInput.value.length === 4) {
		pinBox.classList.add("invisible");
		loadingSpinner.style.display = "block";
		verifyEmail();
	}
};

if (pinInput) {
	pinInput.addEventListener("keyup", (e) => {
		if (!Number.isInteger(parseInt(e.key))) {
			e.preventDefault();
		} else {
			checkPinInput();
		}
	});
}
