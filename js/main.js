// Simple slideshow + active nav logic
const slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('opacity-100');
  slides[current].classList.add('opacity-0');
  current = (current + 1) % slides.length;
  slides[current].classList.remove('opacity-0');
  slides[current].classList.add('opacity-100');
}, 6000);

// Active nav link based on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active-nav');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active-nav');
    }
  });
});