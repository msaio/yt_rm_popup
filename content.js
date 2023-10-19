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
			if (popupContainer.style.display != 'none'){
				console.log("yt_rm_popup: ", "Gotcha!")
				popupContainer.style.display = 'none'; // Hide the element.
				continue;
			}
    }
  }

console.log("yt_rm_popup: ", "Im working on it!")

const intervalId = setInterval(checkForElementAndHide, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("yt_rm_popup:", "Clear Interval");
}, 1000 * 60);
