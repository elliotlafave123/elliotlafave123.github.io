// const deleteAccountButton = document.getElementById("DeleteAccountButton");
// if (deleteAccountButton) {
//   deleteAccountButton.addEventListener("click", async () => {
//     const modal = new Modal("Delete comment", "Are you sure you want to delete this comment?", "Delete", "Cancel");

//     try {
//       const result = await modal.open({
//         title: "Delete account",
//         paragraph: "Are you sure you want to delete your account?",
//         confirmText: "Delete",
//         cancelText: "Cancel",
//         size: "medium",
//         corner: "round",
//         colour: "primary",
//         withBorder: true,
//         ariaLabel: "Delete account modal",
//       });

//       if (result === "confirm") {
//         const deleted = await DeleteUser();
//         if (deleted) {
//           localStorage.removeItem("token");
//           window.location.href = "/index.html";
//         } else {
//           alert("Error deleting account, please try again later");
//         }
//       }
//     } catch (error) {
//       console.error("Modal action was cancelled", error);
//     }
//   });
// }
