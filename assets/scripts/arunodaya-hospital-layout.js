document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
  Load Layout Partials
  ================================ */

  loadPartial("header-placeholder", "header.html");
  loadPartial("footer-placeholder", "footer.html");
  loadPartial("floating-buttons-placeholder", "floating-buttons.html");

});

/* ===============================
  Load HTML Partials Helper
================================ */

function loadPartial(placeholderId, file) {
  const el = document.getElementById(placeholderId);
  if (!el) return;

  fetch(file)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;

      //Initialize navbar ONLY after header loads
      if (placeholderId === "header-placeholder") {
        initNavbar();
      }
      el.querySelectorAll(".lazy-section").forEach(section => {
        lazyObserver.observe(section);
      });
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

/* ===============================
  Navbar Controller
================================ */

function initNavbar() {

  const nav = document.querySelector(".dr1013header nav");
  const overlay = document.getElementById("nav-overlay");
  const toggle = document.querySelector(".menu-toggle");

  if (!nav || !overlay || !toggle) {
    console.warn("Navbar elements not found yet");
    return;
  }

  /* ---------- Helpers ---------- */

  function openMenu() {
    nav.classList.add("show");
    overlay.classList.add("show");
    document.body.classList.add("no-scroll", "menu-open");
    toggle.classList.add("open");
  }

  function closeMenu() {
    nav.classList.remove("show");
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll", "menu-open");
    toggle.classList.remove("open");
  }

  function toggleMenu() {
    nav.classList.contains("show") ? closeMenu() : openMenu();
  }

  /* ---------- Events ---------- */

  // Hamburger click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Overlay click closes
  overlay.addEventListener("click", closeMenu);

  // Click outside closes
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Clicking any nav link closes menu
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// ===============================
// Optimized Lazy Section Observer
// ===============================

let lazyIndex = 0;

const lazyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // Small stagger delay (0–240ms)
      const delay = Math.min(lazyIndex * 80, 240);
      el.style.transitionDelay = `${delay}ms`;
      lazyIndex++;

      el.classList.add("is-visible");
      lazyObserver.unobserve(el);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "120px 0px"
  }
);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lazy-section").forEach(section => {
    lazyObserver.observe(section);
  });
});
