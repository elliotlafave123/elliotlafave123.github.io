import { State } from "./State";

export function DisplayNoneFoundError() {
	State.appContainer.innerHTML = "";
	document.querySelector(".ProjectsAppNotFound").classList.remove("invisible");
}

export function HideNoneFoundError() {
	document.querySelector(".ProjectsAppNotFound").classList.add("invisible");
}
