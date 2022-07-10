let enlargedImageOpen = false;

document.addEventListener("click", function (e) {
	if (e.target.classList.contains("article__image") || e.target.classList.contains("articleImg")) {
		if (!enlargedImageOpen) {
			e.target.closest(".article__image").classList.add("article__image-enlarged");
			enlargedImageOpen = true;
		} else {
			e.target.closest(".article__image").classList.remove("article__image-enlarged");
			enlargedImageOpen = false;
		}
	}
});
