import { projects } from "./projects/projectsArray.mjs";
const projectContainer = document.querySelector(".projects-wrapper");

const toolsHtml = (icons) => {
  const toolsWrapper = document.createElement("div");
  toolsWrapper.className = "tools-wrapper";

  icons.forEach((icon) => {
    const toolImgWrap = document.createElement("figure");
    const tools = document.createElement("img");
    tools.src = icon;

    toolImgWrap.append(tools);
    toolsWrapper.append(toolImgWrap);
  });

  return toolsWrapper;
};

export const getProjects = () => {
  projects.map((project) => {
    const container = document.createElement("div");
    container.className = "project-container";

    const imgWrap = document.createElement("figure");
    imgWrap.className = "project-img-box ";
    const img = document.createElement("img");
    img.className = "img-thumbnail";
    img.src = project.images[0];

    imgWrap.append(img);

    const contextWrapper = document.createElement("div");
    contextWrapper.className = "context-container";
    const title = document.createElement("h2");
    title.textContent = project.title;
    const para = document.createElement("p");
    para.textContent = project.description;

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "project-btn-wrap";

    const demoButton = document.createElement("a");
    demoButton.href = project.links.hostedDemo;
    demoButton.target = "_blank";
    demoButton.textContent = "Demo";

    const repoButton = document.createElement("a");
    repoButton.href = project.links.repository;
    repoButton.target = "_blank";
    repoButton.textContent = "Github"

    buttonWrapper.append(demoButton, repoButton);

    contextWrapper.append(title, para, toolsHtml(project.tools), buttonWrapper);

    container.append(imgWrap, contextWrapper);
    projectContainer.append(container);
  });
};
