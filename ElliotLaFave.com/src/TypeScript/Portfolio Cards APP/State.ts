/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Project } from "./projectModel";
import { getGridColumnCount } from "./helpers";

interface State {
  inputs: {
    searchBar: HTMLInputElement;
    dropdown: HTMLSelectElement;
  };
  ifFiltered: boolean;
  allProjects: Array<Project>;
  DisplayedProjects: Array<Project>;
  isMobile: boolean;
  gridColumnCount: number;
  page: number;
  numPages: number;
  appContainer: HTMLBodyElement;
}

export const State = {
  inputs: {
    searchBar: <HTMLInputElement>document.getElementById("ProjectsAppInput"),
    dropdown: <HTMLSelectElement>document.getElementById("dropdown"),
  },
  isFiltered: false,
  allProjects: null,
  DisplayedProjects: null,
  isMobile: window.innerWidth < 500,
  gridColumnCount: getGridColumnCount(),
  page: 1,
  numPages: undefined,
  appContainer: document.querySelector(".ProjectsAppContainer"),
};
