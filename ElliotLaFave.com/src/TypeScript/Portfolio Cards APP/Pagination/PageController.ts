import { DisplayMultipleCards } from "../displayCards";
import { DisplayNoneFoundError, HideNoneFoundError } from "../DisplayNoneFoundError";
import { State } from "../State";

export function HidePagination() {
  document.getElementById("PaginationContainer").classList.add("invisible");
  document.getElementById("PaginationContainerBottom").classList.add("invisible");
}

export function ShowPagination() {
  document.getElementById("PaginationContainer").classList.remove("invisible");
  document.getElementById("PaginationContainerBottom").classList.remove("invisible");
}

export function ResetPagination() {
  State.page = 1;
  const pageNumberEl = <HTMLInputElement>document.getElementById("PageNumberEl");
  pageNumberEl.value = State.page.toString();
  const pageNumberElBottom = <HTMLInputElement>document.getElementById("PageNumberElBottom");
  pageNumberElBottom.value = State.page.toString();
}

export function InitializePagination(): void {
  const pageNumberEl = <HTMLInputElement>document.getElementById("PageNumberEl");
  pageNumberEl.value = State.page.toString();
  const pageNumberElBottom = <HTMLInputElement>document.getElementById("PageNumberElBottom");
  pageNumberElBottom.value = State.page.toString();

  const LastPage = <HTMLInputElement>document.getElementById("LastPage");
  const NextPage = <HTMLInputElement>document.getElementById("NextPage");
  const LastPageBottom = <HTMLInputElement>document.getElementById("LastPageBottom");
  const NextPageBottom = <HTMLInputElement>document.getElementById("NextPageBottom");

  pageNumberEl.addEventListener("input", function () {
    if (pageNumberEl.value === "") {
      pageNumberEl.value = pageNumberElBottom.value;
    }
    pageNumberElBottom.value = pageNumberEl.value;
    switchPageByValue();
  });

  pageNumberElBottom.addEventListener("input", function () {
    if (pageNumberElBottom.value === "") {
      pageNumberElBottom.value = pageNumberEl.value;
    }
    pageNumberEl.value = pageNumberElBottom.value;
    switchPageByValue();
    scrollToTop();
  });

  LastPage.addEventListener("click", function () {
    pageNumberEl.value = (parseInt(pageNumberEl.value) - 1).toString();
    pageNumberElBottom.value = pageNumberEl.value;
    switchPageByValue();
  });

  NextPage.addEventListener("click", function () {
    pageNumberEl.value = (parseInt(pageNumberEl.value) + 1).toString();
    pageNumberElBottom.value = pageNumberEl.value;
    switchPageByValue();
  });

  LastPageBottom.addEventListener("click", function () {
    pageNumberElBottom.value = (parseInt(pageNumberEl.value) - 1).toString();
    pageNumberEl.value = pageNumberElBottom.value;
    switchPageByValue();
    scrollToTop();
  });

  NextPageBottom.addEventListener("click", function () {
    pageNumberElBottom.value = (parseInt(pageNumberEl.value) + 1).toString();
    pageNumberEl.value = pageNumberElBottom.value;
    switchPageByValue();
    scrollToTop();
  });
}

function IsPagePossible(pageNumber: number): boolean {
  if (pageNumber < 1) {
    return false;
  } else if (pageNumber > State.numPages) {
    return false;
  } else {
    return true;
  }
}

function scrollToTop(): void {
  const ProjectsAppInputs = document.querySelector(".ProjectsAppInputs");
  if (ProjectsAppInputs) ProjectsAppInputs.scrollIntoView();
}

function switchPageByValue(): void {
  const pageNumberEl = <HTMLInputElement>document.getElementById("PageNumberEl");
  const pageNumberElBottom = <HTMLInputElement>document.getElementById("PageNumberElBottom");

  if (!pageNumberEl.value) {
    return DisplayNoneFoundError();
  } else {
    HideNoneFoundError();
  }

  const PageToGoTo = parseInt(pageNumberEl.value);
  if (IsPagePossible(PageToGoTo)) {
    State.page = PageToGoTo;
    DisplayMultipleCards(State.DisplayedProjects);
  } else {
    pageNumberEl.value = State.page.toString();
    pageNumberElBottom.value = State.page.toString();
  }
}
