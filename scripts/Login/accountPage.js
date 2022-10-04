let token = localStorage.getItem("token");
const API_URL = "https://elliotapiserver.co.uk/Auth";
const logOutButton = document.getElementById("logOutButton");
const DeleteAccountButton = document.getElementById("DeleteAccountButton");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const modalContainer = document.querySelector(".modal-container");
const confirmModal = document.getElementById("confirmModal");

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
if (DeleteAccountButton) {
	DeleteAccountButton.addEventListener("click", (e) => {
		e.preventDefault();
		openDeleteAccountModal();
	});
}
if (confirmModal) {
	confirmModal.addEventListener("click", (e) => {
		e.preventDefault();
		deleteAccount();
	});
}

openDeleteAccountModal = () => {
	modalContainer.style.display = "flex";
	console.log(document.querySelector("body"));

	const closeButtons = document.querySelectorAll(".closeModal");
	if (closeButtons) {
		closeButtons.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.stopPropagation();
				if (e.target.classList.contains("closeModal")) closeModal();
			});
		});
	}
};

closeModal = () => {
	modalContainer.style.display = "none";
};

deleteAccount = async () => {
	let token = localStorage.getItem("token");
	try {
		let res = await fetch(API_URL + "/delete-account", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: token }),
		});

		if (res.status === 500) throw new Error("An error occoured, please try again later.");
		localStorage.setItem("token", "");
		window.location.replace("../../pages/Login/signUp.html");
	} catch (error) {
		data.errorMessage = error.message;
		data.errorHidden = false;
		setTimeout(() => {
			data.errorHidden = true;
		}, 5000);
	}
};
