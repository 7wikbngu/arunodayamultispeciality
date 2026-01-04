function toggleMenu() {
	const menu = document.querySelector('.dr1013header nav');
	menu.classList.toggle('show');
}

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
