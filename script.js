// ===== Мобільне меню =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// ===== Зміна фону меню при скролі =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Анімації при прокрутці =====
const fadeElems = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElems.forEach(elem => {
  appearOnScroll.observe(elem);
});

// ===== Плавна прокрутка (для внутрішніх посилань) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Ефект кнопки при натисканні =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 300);
  });
});
