function loadertoggle(div) {
	$("#loader").toggle();
}

window
	.addEventListener(
		"pageshow",
		function(event) {
			var pagehistory = event.persisted
				|| (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
			if (pagehistory) {
				document.querySelector("#loader").style.display = "none";
			}
		});

document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
		document.querySelector("#loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};