export const openDeleteAccountModal = () => {
  const modalContainer: HTMLElement = document.querySelector(".modal-container");
  if (!modalContainer) return;
  modalContainer.style.display = "flex";

  const closeButtons: HTMLElement[] = Array.from(document.querySelectorAll(".closeModal"));
  if (closeButtons.length > 0) {
    closeButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        const target: HTMLElement = e.target as HTMLElement;
        e.stopPropagation();
        if (target.classList.contains("closeModal")) modalContainer.style.display = "none";
      });
    });
  }
};

export const deleteAccount = async () => {
  const API_URL = "https://elliotapiserver.co.uk/Auth";
  // const API_URL = "http://localhost:3000/Auth";
  const token = localStorage.getItem("token");
  try {
    await fetch(API_URL + "/delete-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    localStorage.setItem("token", "");
    const backLinkUrl = localStorage.getItem("backLink") || "../../index.html";
    window.location.replace(backLinkUrl);
  } catch (error) {
    // Do nothing
  }
};
