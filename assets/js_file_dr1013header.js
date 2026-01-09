function toggleMenu() {
	const menu = document.querySelector('.dr1013header nav');
	menu.classList.toggle('show');
}

document.addEventListener("click", function (e) {
  const nav = document.querySelector(".dr1013header nav");
  const toggle = document.querySelector(".menu-toggle");
  if (!nav || !toggle) return;
  const clickedInsideNav = nav.contains(e.target);
  const clickedToggle = toggle.contains(e.target);
  if (!clickedInsideNav && !clickedToggle && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const nav = document.querySelector(".dr1013header nav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  }
});

document.querySelectorAll(".dr1013header nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".dr1013header nav").classList.remove("show");
  });
});


// Hide menu when clicking on a link inside the ul
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.dr1013header nav');
    const menuLinks = nav.querySelectorAll('ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show'); // hide the menu
        });
    });
});
