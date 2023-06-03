const skillsWrapper = document.getElementById("mySkills");

export function createSkillNode(props) {
  icons(props[0].dev, "Languages");
  icons(props[0].tools, "tools & Libraries");
}

function icons(props, title) {
  const wrapper = document.createElement("div");
  const header = document.createElement("h3");

  console.log(props);
  console.log(title);

  header.textContent = title;
  wrapper.className = "icon-wrapper";
  wrapper.appendChild(header);

  props.map((skill) => {
    const imgWrap = document.createElement("div");
    const img = document.createElement("img");
    imgWrap.className = "my-skills-icon fade-left";
    img.src = skill.icon;
    img.alt = skill.title;

    const tooltip = document.createElement("p");
    tooltip.textContent = skill.title;
    tooltip.className = "hidden tooltip";

    imgWrap.append(img, tooltip);
    wrapper.append(imgWrap);
    skillsWrapper.append(header, wrapper);

    imgWrap.addEventListener("mouseenter", () => {
      tooltip.classList.toggle("hidden");
    });

    imgWrap.addEventListener("mouseleave", () => {
      tooltip.classList.toggle("hidden");
    });
  });
}
