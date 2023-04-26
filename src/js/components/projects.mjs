import { projects } from "./projects/projects";
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
    const container = document.createElement("container");
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

    contextWrapper.append(title, para, toolsHtml(project.tools));

    container.append(imgWrap, contextWrapper);
    projectContainer.append(container);
  });
};
