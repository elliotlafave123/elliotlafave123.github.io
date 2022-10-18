const closeModal = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");
const modal = document.querySelector(".modal");
const openModal = document.getElementById("openModal");
const reset = document.getElementById("reset");
const closeModalWindow = function() {
    modalContainer.style.display = "none";
    modal.classList.add("hidden");
};
const openModalWindow = function() {
    modalContainer.style.display = "flex";
    modal.classList.remove("hidden");
};
if (!localStorage.getItem("firstGame")) localStorage.setItem("firstGame", "false");
if (localStorage.getItem("firstGame") == "false") closeModalWindow();
closeModal.addEventListener("click", closeModalWindow);
modalContainer.addEventListener("click", closeModalWindow);
openModal.addEventListener("click", openModalWindow);
reset.addEventListener("click", ()=>{
    location.reload();
});

//# sourceMappingURL=index.c8b7409b.js.map
