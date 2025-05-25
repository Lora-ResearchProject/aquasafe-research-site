document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("opacity-100");
    slides[current].classList.add("opacity-0");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("opacity-0");
    slides[current].classList.add("opacity-100");
  }, 6000);
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Active nav link based on scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active-nav");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  items.forEach((item) => observer.observe(item));
});
