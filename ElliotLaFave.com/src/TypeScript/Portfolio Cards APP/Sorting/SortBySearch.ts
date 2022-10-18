import type { Project } from "../projectModel";
import { State } from "../State";
import { DisplayMultipleCards } from "../displayCards";
import { DisplayNoneFoundError, HideNoneFoundError } from "../DisplayNoneFoundError";

// function SortBySearch(phrase: string): Array<Project>;
// function SortBySearch(phrase: string, projects: Array<Project>): Array<Project>;
export function SortBySearch(phrase: string, projects?: Array<Project>) {
  let AllProjects: Array<Project>;
  if (projects === undefined) {
    AllProjects = State.allProjects;
  } else {
    AllProjects = projects;
  }

  const filteredProjects: Array<Project> = new Array<Project>();
  AllProjects.forEach((proj) => {
    if (proj.title.toLowerCase().includes(phrase.toLowerCase())) {
      filteredProjects.push(proj);
    }
  });
  State.DisplayedProjects = filteredProjects;

  if (State.DisplayedProjects.length > 0) {
    HideNoneFoundError();
    DisplayMultipleCards(State.DisplayedProjects);
  } else {
    DisplayNoneFoundError();
  }
  return filteredProjects;
}
