import { State } from "./state";

const API_URL = "https://elliotapiserver.co.uk/Auth";

export const saveFullName = async () => {
	const saveButton: HTMLInputElement = document.getElementById("SaveChanges") as HTMLInputElement;
	if (saveButton) saveButton.disabled = true;

	const token = localStorage.getItem("token");
	const res = await fetch(API_URL + "/editName", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ token: token, fullName: State.fullName }),
	});
	if (res.status === 200) {
		const savedMessage: HTMLElement = document.querySelector(".savedName");
		if (savedMessage) {
			savedMessage.style.opacity = "1";
			setTimeout(() => {
				savedMessage.style.opacity = "0";
			}, 1000);
		}
	} else {
		throw new Error("Cannot update name, please try again later");
	}
};
