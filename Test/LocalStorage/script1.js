let played = localStorage.getItem("counterPlayed");
console.log(played);

if (localStorage.getItem("counterPlayed") === played) {
	window.location.href = "counter.html";
} else {
	localStorage.setItem("incrementer", 0);
	window.location.href = "counter.html";
}
