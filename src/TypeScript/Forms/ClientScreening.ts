class ClientScreening implements ClientScreeningModel {
  id = 0;
  fullName = "";
  email = "";
  budget = "";
  businessDescription = "";
  productOrService = 0;
  websiteOrApplication = 0;
}

const InitClientScreeningForm = () => {
  const clientScreeningForm = document.getElementById("js-client-screening-form") as HTMLFormElement;
  const postContactMeFormButton: HTMLInputElement = document.getElementById(
    "postContactMeFormButton"
  ) as HTMLInputElement;

  if (clientScreeningForm) {
    postContactMeFormButton.addEventListener("click", () => {
      // TODO: Validate form
      // ensure all fields are filled out
      const fullName = clientScreeningForm.fullName.value;
      const email = clientScreeningForm.email.value;
      const budget = clientScreeningForm.budget.value;
      const productOrService = clientScreeningForm.productOrService.value;
      const websiteOrApplication = clientScreeningForm.websiteOrApplication.value;

      if (!fullName || !email || !budget || !productOrService || !websiteOrApplication) {
        alert("Please fill out all required fields.");
        return;
      }

      // Create a new model
      const clientScreening = new ClientScreening();

      // Set the values from the form
      clientScreening.fullName = clientScreeningForm.fullName.value;
      clientScreening.email = clientScreeningForm.email.value;
      clientScreening.budget = clientScreeningForm.budget.value;

      // Long questions
      clientScreening.businessDescription = clientScreeningForm.businessDescription.value;

      // Radio buttons
      clientScreening.productOrService = clientScreeningForm.productOrService.value;
      clientScreening.websiteOrApplication = clientScreeningForm.websiteOrApplication.value;

      const API_URL = "https://freelance-api.elliotlafave.com/ClientScreening";
      // const API_URL = "https://localhost:7135/ClientScreening";

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientScreening),
      })
        .then((response) => response.json())
        .then(() => {
          window.location.href = "/pages/success/index.html";
        })
        .catch(() => {
          console.error("Error:");
        });
    });
  }
};

export { InitClientScreeningForm };
