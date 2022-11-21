const playPause = document.getElementById("playPause");
let paused = true;
playPause.innerHTML = `
            <i class="fas fa-pause"></i>
        `;

playPause.addEventListener("click", () => {
	playPause.innerHTML = "";
	if (paused) {
		paused = false;
	} else {
		paused = true;
	}

	if (paused) {
		playPause.innerHTML = `
            <i class="fas fa-pause"></i>
        `;
	} else {
		playPause.innerHTML = `
            <i class="fas fa-play"></i>
        `;
	}
});
