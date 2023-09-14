const env = document.getElementById("jsEnvironment")?.textContent?.trim() || "development";

export class Constants {
  static API_BASE_URL =
    env === "production"
      ? "https://elliotapiserver.com"
      : env === "test"
      ? "https://test.elliotapiserver.com"
      : "http://localhost:5001";
}
