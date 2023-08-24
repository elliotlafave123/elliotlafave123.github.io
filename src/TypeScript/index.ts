import { displayComments } from "./Comments/displayComments";
import { handlePostComment } from "./Comments/handlePostComment";
import { checkLogin } from "./Comments/displaySignedInStrip";
import { initPortfolioCardsApp } from "./Portfolio Cards APP/InitPortfolioCardsApp";
// import { initKeyboardNavigation } from "./Accesibility/keyboardNavigation";
// Set Dark Mode
import { setDarkMode } from "./DarkMode/setDarkMode";
import { handleDarkMode } from "./DarkMode/handleDarkMode";

// breadcrumb
import { createBreadcrumb } from "./breadcrumb/breadcrumb";

// Tooltip
import { initTooltip } from "./Tooltip/tooltip";
// Articles
import { startEnlargeImage } from "./Articles/enlargeImg";
import { startArticleSidebar } from "./Articles/articleSidebar";
// Page Specific
// Homepage
import { writeText } from "./PageSpecific/Homepage/typingTextEffect";
// Portfolio
import { initGitStats } from "./PageSpecific/Portfolio/GithubStats";
import { initJsPortfolioFeaturedCards } from "./Portfolio Cards APP/FeaturedCards/DisplayFeaturedCards";
// Authentication System
import { initStoreBackLink } from "./Authentication System/StoreBackLink";
import { fetchAccountDetails } from "./Authentication System/Account Page/fetchAccountDetails";
import { handleShowPassword } from "./Authentication System/ShowPassword";
import { CheckLoginOnLoginForm } from "./Authentication System/login/login";
import "./Authentication System/login/signUp";
import "./Authentication System/login/verifyEmail";
import { emailVerified } from "./Authentication System/login/verifyEmail";

// Cookie Banner
import { HandleCookies } from "./CookieBanner/ShowCookieBanner";
// Show Contact Me Form Sent Checkmark
import { ShowSentCheckmark } from "./ContactMeForm/ShowSentCheckmark";
// Initialize client screening form
import { InitClientScreeningForm } from "./Forms/ClientScreening";
// Header
import { initHeader } from "../../ComponentAssets/simpleComponents/layout/header/header";
import { setMainElementTopPadding } from "./Header/MainElementTopPadding";

setMainElementTopPadding();

// Init Header
initHeader();

// Login and sign uo
CheckLoginOnLoginForm();

// Function to check if element exists
const exists = (el: HTMLElement) => {
  if (typeof el !== "undefined" && el !== null) {
    return true;
  } else return false;
};

if (exists(document.querySelector(".loginForm.verify"))) emailVerified();

// Set current year in footer
const yearSpan: HTMLElement = document.getElementById("currentYear") as HTMLElement;
const currentYear = new Date();
yearSpan.textContent = currentYear.getFullYear().toString();

// Show Contact Me Form Sent Checkmark
HandleCookies();

// Show cookie banner
ShowSentCheckmark();

// Set dark mode
setDarkMode();
handleDarkMode();

// init breadcrumb
createBreadcrumb();

// Init comments section
async function initComments() {
  const accountPage = document.getElementById("accountPage");
  if (exists(accountPage)) {
    fetchAccountDetails();
  } else {
    // Set login state
    checkLogin();
  }

  // Display comments on page
  const element = document.querySelector(".comments-container");
  if (typeof element !== "undefined" && element !== null) {
    await displayComments();
    handlePostComment();
  }
}
initComments();

// init client screening form
const ClientScreeningForm: HTMLElement = document.getElementById("js-client-screening-form") as HTMLFormElement;
if (exists(ClientScreeningForm)) InitClientScreeningForm();

// init tooltip
const tooltipContainer: HTMLElement = document.querySelector(".tooltip") as HTMLElement;
if (exists(tooltipContainer)) initTooltip();

// init keyboard navigation
// initKeyboardNavigation();

// Projects app initialisation
const ProjectsAppContainer: HTMLElement = document.getElementById("ProjectsAppContainer") as HTMLElement;
if (exists(ProjectsAppContainer)) initPortfolioCardsApp();

// Featured Projects initialisation
const featuredCardsContainerPortfolio: HTMLElement = document.getElementById("featuredCardsContainer") as HTMLElement;
if (exists(featuredCardsContainerPortfolio)) initJsPortfolioFeaturedCards();

////////////////////////////
// Articles
// Article Enlarge Image
const articleImgContainer: HTMLElement = document.querySelector(".article__image") as HTMLElement;
if (exists(articleImgContainer)) startEnlargeImage();
// Article Sidebar
const articleSidebarContainer: HTMLElement = document.querySelector(".article__sidebar") as HTMLElement;
if (exists(articleSidebarContainer)) startArticleSidebar();

///////////////////////////
// Page Specific
// Homepage
const TypingTextContainer: HTMLElement = document.getElementById("typingText") as HTMLElement;
if (exists(TypingTextContainer)) writeText();
// Portfolio
// Git Stats
const GithubStatsContainer: HTMLElement = document.getElementById("GithubStats") as HTMLElement;
if (exists(GithubStatsContainer)) initGitStats();

//////////////////////////
// Authentication System
// Store back link
const BackLinkButton: HTMLElement = document.querySelector(".storeBackLink") as HTMLElement;
if (exists(BackLinkButton)) initStoreBackLink();

const PasswordInput: HTMLElement = document.getElementById("password") as HTMLElement;
if (exists(PasswordInput)) handleShowPassword();
