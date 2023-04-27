import { projects } from "../projects/projects.mjs";

const modal = document.querySelector(".modal");
const modalHeader = document.querySelector(".modal-header");
const modalBody = document.querySelector(".modal-body");
const modalFooter = document.querySelector(".modal-footer");

const FilterResult = (target) => {
  const filteredTarget = projects.filter((project) => project.images[0] === target);

  return filteredTarget;
};

export const openModal = (e) => {
  const target = e.target.attributes.src.value;
  let filterResult = FilterResult(target);

  modal.classList.remove("hide-modal");

  createModalContent(filterResult[0]);
};

const closeModal = () => {
  modal.classList.add("hide-modal");

  const modalDelete = document.querySelectorAll(".modal-delete");

  modalDelete.forEach((element) => {
    element.remove();
  });
};

const createModalContent = (content) => {
  const contentImages = content.images;

  // header elements
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = content.title;
  modalTitle.className = "modal-delete";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close modal-delete";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.textContent = "\u00D7";

  closeButton.addEventListener("click", closeModal);

  modalHeader.append(modalTitle, closeButton);

  // Modal body

  contentImages.forEach((image) => {
    const imgContainer = document.createElement("figure");
    imgContainer.className = "module-img modal-delete";
    const img = document.createElement("img");
    img.src = image;

    imgContainer.append(img);

    modalBody.append(imgContainer);
  });

  // modal footer

  const closeModalBottom = document.createElement("button");
  closeModalBottom.type = "button";
  closeModalBottom.className = "modal-delete";
  closeModalBottom.textContent = "Close";

  closeModalBottom.addEventListener("click", closeModal);

  modalFooter.append(closeModalBottom);
};
