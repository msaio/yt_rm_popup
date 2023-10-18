function checkForElementAndHide() {
  // const popupContainer = document.querySelector('ytd-popup-container.style-scope.ytd-app');
  const classes = [
    "ytd-popup-container.style-scope.ytd-app",
    "tp-yt-iron-overlay-backdrop",
    "tp-yt-iron-overlay-backdrop.opened",
    "tp-yt-iron-overlay-backdrop[opened]",
    "ytd-popup-container.style-scope ytd-app",
    "ytd-popup-container.style-scope.ytd-app",
		"ytd-popup-container[class='style-scope ytd-app']"
  ]

  for(i of classes){
    var popupContainer = document.querySelector(i);
    if (popupContainer) {
      // The element with the specified class exists.
			popupContainer.style.display = 'none'; // Hide the element.
      // clearInterval(intervalId); // Clear the interval.
			// popupContainer.remove();
      return;
    }
  }
  // var popupContainer = document.querySelector('tp-yt-iron-overlay-backdrop');
  // // tp-yt-iron-overlay-backdrop.opened

  // if (popupContainer) {
  //   // The element with the specified class exists.
  //   popupContainer.style.display = 'none'; // Hide the element.
  //   clearInterval(intervalId); // Clear the interval.
  // }
}

// Set an interval to check for the element every 1000 milliseconds (1 second).
const intervalId = setInterval(checkForElementAndHide, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("yt_rm_popup:", "Clear Interval");
}, 1000 * 60);
