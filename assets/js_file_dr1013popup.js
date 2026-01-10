// popup.js

function showPopupAtViewport() {
  const popup = document.getElementById("popup");
  const content = popup.querySelector(".popup-content");

  popup.style.display = "block";

  requestAnimationFrame(() => {
    const rect = content.getBoundingClientRect();
    const padding = 16;

    // Viewport center (current scroll position)
    const viewportX = window.innerWidth / 2;
    const viewportY = window.innerHeight / 2;

    let x = viewportX - rect.width / 2;
    let y = viewportY - rect.height / 2;

    // Clamp inside viewport
    x = Math.max(padding, Math.min(x, window.innerWidth - rect.width - padding));
    y = Math.max(padding, Math.min(y, window.innerHeight - rect.height - padding));

    content.style.left = `${x}px`;
    content.style.top = `${y}px`;
  });

  // Auto close after 9s
  setTimeout(() => {
    popup.style.display = "none";
  }, 9000);
}

// Auto popup after page load
window.addEventListener("load", () => {
  setTimeout(showPopupAtViewport, 10000);
});

// Close button
document.getElementById("popupClose").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// Optional: click outside closes popup
document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target.id === "popup") {
    e.currentTarget.style.display = "none";
  }
});
