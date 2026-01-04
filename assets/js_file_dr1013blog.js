// Modal Logic
var modal = document.getElementById("myModal");
var btn = document.getElementById("read-more-link");
var span = document.getElementsByClassName("closeblog")[0];

// When the user clicks on "Read More", open the modal
btn.onclick = function(event) {
	event.preventDefault();
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}