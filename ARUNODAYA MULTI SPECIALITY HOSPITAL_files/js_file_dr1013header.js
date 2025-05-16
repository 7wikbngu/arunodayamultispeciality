function toggleMenu() {
	const menu = document.getElementById('menu');
	menu.classList.toggle('show');
}

// Auto-close mobile menu when link clicked
document.addEventListener('DOMContentLoaded', () => {
	const menuLinks = document.querySelectorAll('#menu a');
	const menu = document.getElementById('menu');

	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('show');
		});
	});
});