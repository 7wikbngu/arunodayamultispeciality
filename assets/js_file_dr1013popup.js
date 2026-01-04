// Popup
window.addEventListener('load', () => {
	setTimeout(() => {
		document.getElementById('popup').style.display = 'flex';
		setTimeout(() => {
			document.getElementById('popup').style.display = 'none';
		}, 9000);
	}, 10000);
});

document.getElementById('popupClose').addEventListener('click', () => {
	document.getElementById('popup').style.display = 'none';
});