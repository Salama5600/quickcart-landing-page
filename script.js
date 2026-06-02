const header = document.querySelector('.header');
const nav = document.getElementById('primaryNav');
const navToggle = document.getElementById('navToggle');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const closeNav = () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealItems = document.querySelectorAll('.reveal-up');
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 960) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
