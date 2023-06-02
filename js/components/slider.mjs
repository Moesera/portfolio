import { changeButtonText } from "./buttonText.mjs";

/**
 * Card group selector & card description selector
 */
const pageGroup = document.getElementsByClassName("page-section");

/**
 * index for dataset active
 */
let activePageIndex = 0;

export const slidePageNext = () => {
  /**
   * Active index bump
   */
  const nextPageIndex = activePageIndex + 1 <= pageGroup.length - 1 ? activePageIndex + 1 : 0;

  const currentPage = document.querySelector(`.page-section[data-index="${activePageIndex}"]`),
    nextPage = document.querySelector(`.page-section[data-index="${nextPageIndex}"]`);

  /**
   * Active card group becomes after
   */
  currentPage.setAttribute("closing", "");
  currentPage.removeAttribute("opening");
  setTimeout(() => {
    currentPage.dataset.status = "hidden";
}, 700);

  /**
   * Update active index
   */
  setTimeout(() => {
    nextPage.removeAttribute("closing");
    nextPage.setAttribute("opening", "");
    setTimeout(() => {
      nextPage.dataset.status = "active";
      activePageIndex = nextPageIndex;
    }, 700);
  });

  changeButtonText(nextPageIndex);
};

// export const slidePageBack = () => {
//   const nextPageIndex = activePageIndex - 1 >= 0 ? activePageIndex - 1 : pageGroup.length - 1;

//   const currentPage = document.querySelector(`.page-section[data-index="${activePageIndex}"]`),
//     nextPage = document.querySelector(`.page-section[data-index="${nextPageIndex}"]`);

//   /**
//    * Active group becomes after
//    */
//   currentPage.setAttribute("closing", "");
//   currentPage.removeAttribute("opening");
//   setTimeout(() => {
//     currentPage.dataset.status = "hidden";
// }, 700);

//   /**
//    * Update active index
//    */
//   setTimeout(() => {
//     nextPage.removeAttribute("closing");
//     nextPage.setAttribute("opening", "");
//     setTimeout(() => {
//       nextPage.dataset.status = "active";
//       activePageIndex = nextPageIndex;
//     }, 700);
//   });

//   changeButtonText(nextPageIndex);
// };
