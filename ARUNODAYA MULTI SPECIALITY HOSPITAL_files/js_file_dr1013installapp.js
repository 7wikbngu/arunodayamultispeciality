let deferredPrompt;

// Check if PWA is already installed
function isAppInstalled() {
	return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}

// Show or hide install button
function toggleInstallButton(show) {
	const wrapper = document.getElementById("installbtnwrapper");
	if (wrapper) wrapper.style.display = show ? "block" : "none";
}

// Before install prompt event
window.addEventListener("beforeinstallprompt", (e) => {
	console.log("beforeinstallprompt fired");
	e.preventDefault();
	deferredPrompt = e;

	// Only show button if app is NOT already installed
	if (!isAppInstalled()) {
		toggleInstallButton(true);
	}

	document.getElementById("installbtn").onclick = () => {
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === "accepted") {
				const loader = document.getElementById("loader");
				loader.style.display = "inline-block";
				console.log("User accepted install");
			} else {
				console.log("User dismissed install");
			}
			deferredPrompt = null;
		});
	};
});

// After app is installed
window.addEventListener("appinstalled", () => {
	console.log("App installed");
	toggleInstallButton(false);
});

// Check on load if app is installed
window.addEventListener("DOMContentLoaded", () => {
	if (isAppInstalled()) {
		toggleInstallButton(false);
	} else {
		// App is not installed, but we wait for beforeinstallprompt to show button
		console.log("App is not installed");
	}
});

// Register Service Worker
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
		.then(() => console.log("Service Worker registered"))
		.catch((err) => console.error("Service Worker error:", err));
}