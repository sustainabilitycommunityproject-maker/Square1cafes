// Smooth scroll
document.querySelectorAll('[data-scroll], .nav-links a[href^="#"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = el.getAttribute('data-scroll') || el.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Audience tabs
const tabs = document.querySelectorAll('.audience-tab');
const panels = document.querySelectorAll('.audience-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target');

    // tabs.forEach((t) => t.classList.remove('active'));    commented out
    // panels.forEach((p) => p.classList.remove('active')); commented out

    tab.classList.add('active');
    document.getElementById(targetId).classList.add('active');
  });
});

// Location map
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);  
L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('Square 1 Cafe Location')
  .openPopup();

// Clickable cards scroll to section
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', () => {
    const target = document.querySelector(card.getAttribute('data-scroll'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Smooth scroll for all cards
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', () => {
    const targetID = card.getAttribute('data-scroll');
    const target = document.querySelector(targetID);

    if (target) {
      const offset = 80; // height of your fixed nav
      const topPos = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  });
});




