let enlargedImageOpen = false;
let enlargedImageClass = "article__image-enlarged";
let articleImageButtonClass = "article__image";
let articleImageClass = "articleImg";

document.addEventListener("click", function (e) {
	if (e.target.classList.contains(articleImageClass) || e.target.classList.contains(articleImageButtonClass)) {
		let image = e.target.closest(`.${articleImageButtonClass}`);
		if (!enlargedImageOpen) {
			image.classList.add(enlargedImageClass);
			enlargedImageOpen = true;
		} else {
			image.classList.remove(enlargedImageClass);
			enlargedImageOpen = false;
		}
	}
});
