export function GenerateDateString(isoDate: Date): string {
  const date = new Date(isoDate);
  const strArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + ",  " + m + " " + y;
}

export function IncludesTag(tag, tags): boolean {
  if (tags.length > 0) {
    tags.forEach((el) => {
      if (el === tag) {
        return true;
      }
    });
    return false;
  }
  return null;
}

export function getGridColumnCount(): number {
  const ProjectsAppContainer = document.querySelector(".ProjectsAppContainer");
  if (!ProjectsAppContainer) return;
  const gridComputedStyle = window.getComputedStyle(ProjectsAppContainer);
  return gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
}

export function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
