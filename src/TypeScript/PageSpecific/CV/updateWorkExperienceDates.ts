export function updateWorkExperienceDates() {
  const startDate = new Date("2022-03-01"); // Assuming your starting date is March 1st, 2022
  const currentDate = new Date();

  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();

  const totalMonths = years * 12 + months;

  const durationYears = Math.floor(totalMonths / 12);
  const durationMonths = totalMonths % 12;

  let durationString = "";

  if (durationYears > 0) {
    durationString += durationYears + " yr";
    if (durationYears > 1) {
      durationString += "s";
    }
  }

  if (durationMonths > 0) {
    if (durationString.length > 0) {
      durationString += " ";
    }
    durationString += durationMonths + " mo";
    if (durationMonths > 1) {
      durationString += "s";
    }
  }

  const autoUpdateDate = document.getElementById("autoUpdateDate");
  if (autoUpdateDate) {
    autoUpdateDate.innerText = "Mar 2022 - Present";
  }

  const autoUpdateDateValue = document.getElementById("autoUpdateDateValue");
  if (autoUpdateDateValue) {
    autoUpdateDateValue.innerText = durationString;
  }
}
