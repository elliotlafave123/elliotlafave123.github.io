export const startEnlargeImage = () => {
  let enlargedImageOpen = false;
  const enlargedImageClass = "article__image-enlarged";
  const articleImageButtonClass = "article__image";
  const articleImageClass = "articleImg";

  document.addEventListener("click", function (e) {
    const eventTarget: HTMLElement = e.target as HTMLElement;
    if (
      (eventTarget && eventTarget.classList.contains(articleImageClass)) ||
      eventTarget.classList.contains(articleImageButtonClass)
    ) {
      const image = eventTarget.closest(`.${articleImageButtonClass}`);
      if (!enlargedImageOpen) {
        image.classList.add(enlargedImageClass);
        enlargedImageOpen = true;
      } else {
        image.classList.remove(enlargedImageClass);
        enlargedImageOpen = false;
      }
    }
  });
};
