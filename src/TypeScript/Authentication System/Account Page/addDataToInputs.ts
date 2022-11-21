import { State } from "./state";

export const addDataToInputs = () => {
	if (!State.fullName || !State.emailAddress) return;
	const fullNameInput: HTMLInputElement = document.getElementById("fullname") as HTMLInputElement;
	const emailInput: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
	if (!fullNameInput || !emailInput) return;
	fullNameInput.value = State.fullName;
	emailInput.value = State.emailAddress;
};
