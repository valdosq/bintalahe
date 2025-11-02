// tahun footer
document.getElementById('y').textContent = new Date().getFullYear();

// Inisialisasi carousel hero: auto-slide, pause saat hover, resume saat keluar
const heroEl = document.getElementById('heroCarousel');
const heroCarousel = new bootstrap.Carousel(heroEl, {
  interval: 3200,
  ride: 'carousel',
  pause: false,
  touch: true,
  keyboard: true
});

// aksesibilitas: jika user memilih reduce-motion, nonaktifkan animasi
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReduced.matches) {
  heroCarousel.pause();
}

// jeda saat kursor di atas (desktop)
heroEl.addEventListener('mouseenter', () => heroCarousel.pause());
heroEl.addEventListener('mouseleave', () => heroCarousel.cycle());

// === Navbar toggler icon toggle ===
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('topnav');
const togglerIcon = navbarToggler.querySelector('.bi');

navbarCollapse.addEventListener('show.bs.collapse', () => {
  togglerIcon.classList.remove('bi-list');
  togglerIcon.classList.add('bi-x');
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
  togglerIcon.classList.remove('bi-x');
  togglerIcon.classList.add('bi-list');
});




