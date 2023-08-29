import { exists } from "../../helpers/exists";
import { InitClientScreeningForm } from "./ClientScreening";

const ClientScreeningForm = document.getElementById("js-client-screening-form") as HTMLFormElement;
if (exists(ClientScreeningForm)) InitClientScreeningForm();
