import { State } from "../State";
import { DisplayMultipleCards } from "../displayCards";
import { SortBySearch } from "./SortBySearch";
import { SortByDropdown } from "./SortByDropdown";
import { DisplayNoneFoundError, HideNoneFoundError } from "../DisplayNoneFoundError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SortByMany(phrase: string, dropdownValue: string) {
  const dropdownFiltered = SortByDropdown(State.inputs.dropdown.value);
  State.DisplayedProjects = SortBySearch(State.inputs.searchBar.value, dropdownFiltered);

  if (State.DisplayedProjects.length > 0) {
    HideNoneFoundError();
    DisplayMultipleCards(State.DisplayedProjects);
  } else {
    DisplayNoneFoundError();
  }
}
