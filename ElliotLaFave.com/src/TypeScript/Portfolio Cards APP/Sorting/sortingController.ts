import { State } from "../State";
import { DisplayMultipleCards } from "../displayCards";
import { SortBySearch } from "./SortBySearch";
import { SortByDropdown } from "./SortByDropdown";
import { SortByMany } from "./SortByMany";
import { ShowClearFiltersButton, HideClearFiltersButton } from "../clearFiltersController";
import { ResetPagination } from "../Pagination/PageController";

/* --------------------------------------------------- */
/*              Sort by search bar input               */
/* --------------------------------------------------- */
export function SortingController() {
  ResetPagination();

  const dropdownHasNoValue: boolean = State.inputs.dropdown.value === "" ? true : false;
  const searchbarHasNoValue: boolean = State.inputs.searchBar.value === "" ? true : false;
  if (dropdownHasNoValue && searchbarHasNoValue) {
    // Both have no value
    HideClearFiltersButton();
    return DisplayMultipleCards(State.allProjects);
  } else if (dropdownHasNoValue && !searchbarHasNoValue) {
    // Only searchbar input
    ShowClearFiltersButton();
    return SortBySearch(State.inputs.searchBar.value);
  } else if (!dropdownHasNoValue && searchbarHasNoValue) {
    // Only dropdown value
    ShowClearFiltersButton();
    return SortByDropdown(State.inputs.dropdown.value);
  } else {
    // Both values changed
    ShowClearFiltersButton();
    return SortByMany(State.inputs.searchBar.value, State.inputs.dropdown.value);
  }
}
