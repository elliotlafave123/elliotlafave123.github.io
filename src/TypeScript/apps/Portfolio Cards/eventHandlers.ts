import { State } from "./State";
import { SortingController } from "./Sorting/sortingController";
import { ClearFiltersController } from "./clearFiltersController";
import { ResetPagination } from "./Pagination/PageController";

export function ListenForSearchInput(): void {
  State.inputs.searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    SortingController();
  });
}

export function ListenForDropdownInput(): void {
  State.inputs.dropdown.addEventListener("change", (e) => {
    e.preventDefault();
    SortingController();
  });
}

export function ListenForClearFiltersClick(): void {
  const clearFiltersButton = document.getElementById("ProjectsAppClearFiltersButton");
  clearFiltersButton.addEventListener("click", function (e) {
    e.preventDefault();
    ResetPagination();
    ClearFiltersController();
  });
}
