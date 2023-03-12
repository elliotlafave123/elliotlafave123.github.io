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

      // const API_URL = "https://freelance-api.elliotlafave.com/ClientScreening";
      const API_URL = "https://localhost:7135/ClientScreening";

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientScreening),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // redirect to /pages/success/index.html
          window.location.href = "/pages/success/index.html";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
};

export { InitClientScreeningForm };
