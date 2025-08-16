document.addEventListener("DOMContentLoaded", () => {
  // Typed.js for hero section
  new Typed("#typed", {
    strings: ["Software Engineer", "Data Scientist", "Data Analyst", "ML Engineer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });

  // particles.js background
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.7 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Slide-down animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.3,
  });

  const slideSections = document.querySelectorAll(".slide-down");
  slideSections.forEach(section => {
    observer.observe(section);
  });
});
// Scroll animation for education
window.addEventListener('scroll', function () {
  const eduSection = document.querySelector('.education-section');
  const rect = eduSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight - 100) {
    eduSection.classList.add('show');
  }
});
// Placeholder for project card interactivity (like modal view)
// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll animation
const revealElements = document.querySelectorAll(".reveal-up");

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealElements[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // for initial view