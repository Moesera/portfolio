const sliders = document.querySelectorAll(".fade-left");

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});