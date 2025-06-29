// Toggle nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

// Vendor dashboard tab navigation
document.querySelectorAll(".tab-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // Remove 'active' from all tabs
    document.querySelectorAll(".tab-link").forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");

    // Hide all sections
    document.querySelectorAll(".dashboard-section").forEach(section => {
      section.classList.add("hidden");
    });

    // Show the selected one
    const target = this.getAttribute("data-section");
    document.getElementById(target).classList.remove("hidden");
  });
});