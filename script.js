const root = document.documentElement;
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeColorMeta = document.getElementById('theme-color-meta');
const THEME_KEY = 'theme';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    /* ignore */
  }
  if (themeToggle) {
    themeToggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', theme === 'light' ? '#fafafa' : '#09090b');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
  applyTheme(root.getAttribute('data-theme') || 'dark');
}

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

const revealElements = document.querySelectorAll(
  '.exp-card, .project-card, .skill-group, .edu-card, .contact-card, .hero-stats .stat'
);

revealElements.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => observer.observe(el));
