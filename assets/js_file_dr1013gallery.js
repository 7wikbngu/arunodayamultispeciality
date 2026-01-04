const track = document.getElementById("galleryTrack");
const slides = document.querySelectorAll(".gallery-card");
let index = 0;
let autoScroll;

function updateSlide() {
	track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
	index = (index + 1) % slides.length;
	updateSlide();
}

function prevSlide() {
	index = (index - 1 + slides.length) % slides.length;
	updateSlide();
}

function startAutoScroll() {
	autoScroll = setInterval(nextSlide, 4000);
}

function stopAutoScroll() {
	clearInterval(autoScroll);
	autoScroll = null;
}

// Touch swipe support + touch stop
let startX = 0;
track.addEventListener("touchstart", e => {
	startX = e.touches[0].clientX;
	stopAutoScroll(); // Pause on touch
});
track.addEventListener("touchend", e => {
	let endX = e.changedTouches[0].clientX;
	if (startX - endX > 50) nextSlide();
	else if (endX - startX > 50) prevSlide();
	startAutoScroll(); // Resume after swipe
});

// Optional: also pause on mouse events (for desktop)
track.addEventListener("mouseover", stopAutoScroll);
track.addEventListener("mouseout", () => {
	if (!autoScroll) startAutoScroll();
});

startAutoScroll();