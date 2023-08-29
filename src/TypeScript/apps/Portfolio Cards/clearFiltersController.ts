import { DisplayMultipleCards } from "./displayCards";
import { HideNoneFoundError } from "./DisplayNoneFoundError";
import { ResetPagination } from "./Pagination/PageController";
import { State } from "./State";

export function ClearFiltersController() {
	HideClearFiltersButton();
	State.inputs.dropdown.value = "";
	State.inputs.searchBar.value = "";
	HideNoneFoundError();
	ResetPagination();
	State.DisplayedProjects = State.allProjects;
	DisplayMultipleCards(State.DisplayedProjects);
}

export function HideClearFiltersButton() {
	document.getElementById("ProjectsAppClearFiltersButton").classList.add("hidden");
}

export function ShowClearFiltersButton() {
	document.getElementById("ProjectsAppClearFiltersButton").classList.remove("hidden");
}
