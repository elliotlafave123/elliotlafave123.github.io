let played = localStorage.getItem("counterPlayed");

if (localStorage.getItem("counterPlayed") === played) {
	window.location.href = "counter.html";
} else {
	localStorage.setItem("incrementer", 0);
	window.location.href = "counter.html";
}
