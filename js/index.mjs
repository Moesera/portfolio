// Imports
import { skills } from "./components/icons/skillsObject.mjs";
import { createSkillNode } from "./components/skills.mjs";
import { slidePageNext } from "./components/slider.mjs";
import { pageNext } from "./components/buttonText.mjs";
import { getProjects } from "./components/projects.mjs";
import { openModal } from "./components/modal.mjs";

// Functionality

createSkillNode(skills);

pageNext.addEventListener("click", () => {
  slidePageNext();
});

getProjects();

const imgThumbnail = document.querySelectorAll(".img-thumbnail");

imgThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    openModal(e);
  });
});
