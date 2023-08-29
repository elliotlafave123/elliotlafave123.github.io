import type { Project } from "../projectModel";
import { State } from "../State";
import { DisplayMultipleCards } from "../displayCards";

export function SortByDropdown(dropdownValue: string) {
  const AllProjects: Array<Project> = State.allProjects;
  const filteredProjects: Array<Project> = new Array<Project>();
  AllProjects.forEach((proj) => {
    proj.tags.forEach((tag) => {
      if (tag === dropdownValue) {
        filteredProjects.push(proj);
      }
    });
  });
  State.DisplayedProjects = filteredProjects;
  DisplayMultipleCards(State.DisplayedProjects);
  return filteredProjects;
}
