// Optional scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
