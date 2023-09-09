export function GenerateDateString(isoDate: Date): string {
  const date = new Date(isoDate);
  const strArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const y = date.getFullYear();
  const hh = date.getHours();
  const mm = date.getMinutes();
  return `${m} ${d <= 9 ? "0" + d : d}, ${y} at ${hh >= 12 ? hh - 12 : hh}:${mm <= 9 ? "0" + mm : mm} ${
    hh >= 12 && mm > 0 ? "PM" : "AM"
  }`;
}
