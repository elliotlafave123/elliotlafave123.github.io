// Articles
import { startEnlargeImage } from "./enlargeImg";
import { startArticleSidebar } from "./articleSidebar";
import { exists } from "../../helpers/exists";

// Article Enlarge Image
const articleImgContainer = document.querySelector(".article__image") as HTMLElement;
if (exists(articleImgContainer)) startEnlargeImage();

// Article Sidebar
const articleSidebarContainer = document.querySelector(".article__sidebar") as HTMLElement;
if (exists(articleSidebarContainer)) startArticleSidebar();
