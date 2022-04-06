const btnScrollToTop = document.querySelector(".btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
	window.scrollTo(0, 0);

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});

	$("html, body").animate({ scrollTop: 0 }, "slow");
});

// We select the element we want to target
var target = document.querySelector("#button-target");

var scrollToTopBtn = document.getElementById("btnScrollToTop");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
	// The callback will return an array of entries, even if you are only observing a single item
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Show button
			scrollToTopBtn.classList.add("showBtn");
		} else {
			// Hide button
			scrollToTopBtn.classList.remove("showBtn");
		}
	});
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);
