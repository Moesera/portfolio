const skillsWrapper = document.getElementById("mySkills");

export function createSkillNode(props) {
  icons(props);
}

function icons(props) {
  const wrapper = document.createElement("div");

  wrapper.className = "icon-wrapper";

  props.map((skill) => {
    const imgWrap = document.createElement("div");
    const img = document.createElement("img");
    imgWrap.className = "my-skills-icon";
    img.src = skill.icon;
    img.alt = skill.title;
    img.loading="lazy";

    const tooltip = document.createElement("p");
    tooltip.textContent = skill.title;
    tooltip.className = "hidden tooltip";

    imgWrap.append(img, tooltip);
    wrapper.append(imgWrap);
    skillsWrapper.append(wrapper);

    imgWrap.addEventListener("mouseenter", () => {
      tooltip.classList.toggle("hidden");
    });

    imgWrap.addEventListener("mouseleave", () => {
      tooltip.classList.toggle("hidden");
    });
  });
}
