// Hamburger menu open and close

// Select the body element to monitor clicks anywhere on the page
const body = document.querySelector("body");
// Select the element that controls the opening of the side menu
const menuController = document.querySelector(".menu-open-mobile");
// Select the side menu itself
const sideMenu = document.querySelector(".side-menu");

// Add click event listener to the menu controller to toggle the side menu open or closed
menuController.addEventListener("click", function () {
	document.querySelector(".side-menu").classList.toggle("side-menu-open");
});

// Add click event listener to the body to close the side menu when clicking anywhere else
body.addEventListener("click", function (event) {
	console.log(event.target.tagName); // Log the tag name of the clicked element
	// Check if the side menu is open and the clicked element is not an image
	if (
		sideMenu.classList.value.includes("side-menu-open") &&
		event.target.tagName !== "IMG"
	) {
		// If conditions are met, close the side menu
		document.querySelector(".side-menu").classList.remove("side-menu-open");
	}
});



// Discography Page - Selecting an album thumbnail to change album summary shown

// Get references to album thumbnails
var albumThumbnails = document.querySelectorAll('.album-thumbnail');

// Add click event listener to each thumbnail
albumThumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // Get the ID of the clicked thumbnail
        var thumbnailId = thumbnail.id;
        
        // Hide all album summaries
        var albumSummaries = document.querySelectorAll('.album-summary');
        albumSummaries.forEach(function(summary) {
            summary.classList.add('hidden');
        });

        // Show the album summary corresponding to the clicked thumbnail
        var albumSummaryToShow = document.getElementById(thumbnailId);
        if (albumSummaryToShow) {
            albumSummaryToShow.classList.remove('hidden');
        }
    });
});

// Easter Egg

var easterEgg = document.getElementById('easter-egg-key');

easterEgg.addEventListener('click', function() {
  document.querySelector('.easter-egg').classList.toggle('ee-open');
});

var easterEggClose = document.querySelector('.ee-close');

easterEggClose.addEventListener('click', function() {
  document.querySelector('.easter-egg').classList.toggle('ee-open');
});

