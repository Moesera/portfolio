export const pageNext = document.querySelector(`[data-attribute="next"]`);
export const pageBack = document.querySelector(`[data-attribute="back"]`);

export const changeButtonText = (pageIndex) => {
  const pageContent = document.querySelector(`[data-index="${pageIndex}"]`);

  switch (pageContent.id) {
    case "home":
      pageNext.childNodes[1].textContent = "projects";
      // pageBack.childNodes[3].textContent = "projects";
      break;
    case "projects":
      pageNext.childNodes[1].textContent = "home";
      // pageBack.childNodes[3].textContent = "home";
      break;
    default:
      pageNext.childNodes[1].textContent = "projects";
      // pageBack.childNodes[3].textContent = "projects";
  }
};
