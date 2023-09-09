import { State } from "./State";
import { showSkeletonLoading } from "./showSkeletonLoadingCards";
import type { Project } from "./projectModel";
import { ListenForSearchInput, ListenForDropdownInput, ListenForClearFiltersClick } from "./eventHandlers";
import { DisplayMultipleCards } from "./displayCards";
import { SortingController } from "./Sorting/sortingController";
import { HideClearFiltersButton } from "./clearFiltersController";
import { InitializePagination } from "./Pagination/PageController";
import { Constants } from "../../Constants/Constants";

const API_URL = `${Constants.API_BASE_URL}/api/v1/projects`;

// Digital Ocean - PAID
// const API_URL: string = "http://142.93.42.62:3000/api/v1/projects";

export const initPortfolioCardsApp = () => {
  showSkeletonLoading();
  InitializePagination();

  // Event Listeners
  ListenForSearchInput();
  ListenForDropdownInput();
  ListenForClearFiltersClick();

  // Hide Clear filters button
  HideClearFiltersButton();
  GetAllProjectsData();
};

/* --------------------------------------------------- */
/*       Make a GET Request to the projects API        */
/* --------------------------------------------------- */
function GetAllProjectsData() {
  fetch(API_URL)
    .then((data) => data.json())
    .then((JsonData) => {
      PopulateProjectsArray(JsonData.reverse());
    });
}

/* --------------------------------------------------- */
/* Generate a list of Projects from the api's data     */
/* --------------------------------------------------- */
function PopulateProjectsArray(JsonData: [Project]) {
  const AllProjects: Array<Project> = new Array<Project>();
  JsonData.forEach((proj: Project) => {
    const project: Project = {
      id: proj.id,
      date: new Date(proj.date),
      title: proj.title,
      paragraph: proj.paragraph,
      linkLivePreview: proj.linkLivePreview,
      linkGit: proj.linkGit,
      linkImg: proj.linkImg,
      tags: proj.tags,
    };
    AllProjects.unshift(project);
  });
  State.allProjects = AllProjects;

  if (State.inputs.dropdown.value !== "" || State.inputs.dropdown.value !== "") {
    SortingController();
  } else {
    State.DisplayedProjects = State.allProjects;
    DisplayMultipleCards(State.DisplayedProjects);
  }
}
