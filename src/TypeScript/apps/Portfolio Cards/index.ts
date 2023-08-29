import { exists } from "../../helpers/exists";
import { initJsPortfolioFeaturedCards } from "./FeaturedCards/DisplayFeaturedCards";
import { initPortfolioCardsApp } from "./InitPortfolioCardsApp";

// Projects app initialisation
const ProjectsAppContainer = document.getElementById("ProjectsAppContainer") as HTMLElement;
if (exists(ProjectsAppContainer)) initPortfolioCardsApp();

// Featured Projects initialisation
const featuredCardsContainerPortfolio = document.getElementById("featuredCardsContainer") as HTMLElement;
if (exists(featuredCardsContainerPortfolio)) initJsPortfolioFeaturedCards();
