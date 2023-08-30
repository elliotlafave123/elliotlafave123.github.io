// Authentication System
import { exists } from "../helpers/exists";
import { initStoreBackLink } from "./StoreBackLink";

const BackLinkButton = document.querySelector(".storeBackLink") as HTMLElement;
if (exists(BackLinkButton)) initStoreBackLink();
