const skillsWrapper = document.getElementById("mySkills");

export function createSkillNode(props) {
  icons(props[0].dev, "Languages");
  icons(props[0].tools, "tools & Libraries");
}

function icons(props, title) {
  const wrapper = document.createElement("div");
  const header = document.createElement("h3");

  header.textContent = title;
  wrapper.className = "icon-wrapper";
  wrapper.appendChild(header);

  props.map((skill) => {
    const imgWrap = document.createElement("div");
    const img = document.createElement("img");
    imgWrap.className = "my-skills-icon fade-left";
    img.src = skill;
    img.alt = "Skill";

    imgWrap.appendChild(img);
    wrapper.append(imgWrap);
    skillsWrapper.append(header, wrapper);
  });
}
