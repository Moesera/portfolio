// Imports
import { skills } from "./components/imgs/skillsObject.mjs";
import { createSkillNode } from "./components/skills.mjs";
import { slidePageBack, slidePageNext } from "./components/slider.mjs";
import { pageNext, pageBack } from "./components/buttonText.mjs";
import { getProjects } from "./components/projects.mjs";
import { openModal } from "./components/modal";

// Functionality

createSkillNode(skills);

pageNext.addEventListener("click", () => {
  slidePageNext();
});

pageBack.addEventListener("click", () => {
  slidePageBack();
});

// getProjects();

// const imgThumbnail = document.querySelectorAll(".img-thumbnail");

// imgThumbnail.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", (e) => {
//     openModal(e);
//   });
// });
