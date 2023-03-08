class ClientScreening implements ClientScreeningModel {
  id = 0;
  fullName = "";
  email = "";
  willStoreData = false;
  dataStoreageRequirements = "";
  budget = "";
  targetLaunchDate = new Date();
  businessDescription = "";
  currentSiteIssues = "";
  targetAudienceMotivations = "";
  uniqueSellingPoints = "";
  successMetrics = "";
  callToAction = "";
  visitorAttractionStrategy = "";
  requiredFeatures = "";
  brandingGuidelines = "";
  competitorAnalysis = "";
  favoriteSites = "";
  additionalServices = "";
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
      clientScreening.dataStoreageRequirements = clientScreeningForm.dataStoreageRequirements.value;
      clientScreening.budget = clientScreeningForm.budget.value;

      // Long questions
      clientScreening.businessDescription = clientScreeningForm.businessDescription.value;
      clientScreening.currentSiteIssues = clientScreeningForm.currentSiteIssues.value;
      clientScreening.targetAudienceMotivations = clientScreeningForm.targetAudienceMotivations.value;
      clientScreening.uniqueSellingPoints = clientScreeningForm.uniqueSellingPoints.value;
      clientScreening.successMetrics = clientScreeningForm.successMetrics.value;
      clientScreening.callToAction = clientScreeningForm.callToAction.value;
      clientScreening.visitorAttractionStrategy = clientScreeningForm.visitorAttractionStrategy.value;
      clientScreening.requiredFeatures = clientScreeningForm.requiredFeatures.value;
      clientScreening.brandingGuidelines = clientScreeningForm.brandingGuidelines.value;
      clientScreening.competitorAnalysis = clientScreeningForm.competitorAnalysis.value;
      clientScreening.favoriteSites = clientScreeningForm.favoriteSites.value;
      clientScreening.additionalServices = clientScreeningForm.additionalServices.value;

      // Checkboxes
      clientScreening.willStoreData = clientScreeningForm.willStoreData.checked;

      // Radio buttons
      clientScreening.productOrService = clientScreeningForm.productOrService.value;
      clientScreening.websiteOrApplication = clientScreeningForm.websiteOrApplication.value;

      const API_URL = "https://freelance-api.elliotlafave.com/ClientScreening";

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
