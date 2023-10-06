export function initShareButton() {
  document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("share-button");

    shareButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (navigator.share) {
        navigator
          .share({
            title: "Check out this awesome page",
            text: "Really, check it out",
            url: window.location.href,
          })
          .catch((error) => console.log("Error sharing", error));
      } else {
        alert("Web Share API not supported.");
      }
    });
  });
}
