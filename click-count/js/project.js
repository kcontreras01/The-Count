// every time we click on #clickme
// 	- update the current count
// 	- update the text on the page with the current count

var currentCount = 0;

function updateCount() {
	currentCount = currentCount + 1;
	var newCountMessage;

	if (currentCount == 1) {
		newCountMessage = currentCount + " click! <br> Ah ah ah!";
	} else	{
		newCountMessage = currentCount + " clicks! <br> Ah ah ah!";
	}

		document.getElementById("clickme").innerHTML = newCountMessage;


	if (currentCount == 10) {
		document.body.style.backgroundColor = "red";
	}

	else if (currentCount > 5 && currentCount < 10) {
		document.body.style.backgroundColor = "green";
	}
	else if (currentCount == 2 || currentCount == 12) {
		document.body.style.backgroundColor = "purple";
	}
	else if (currentCount == 20) {
		document.body.style.backgroundColor = "blue";
	}
	else {
		document.body.style.backgroundColor = "black";
	}
}

// Binding - I have bound the function updateCount to the onclick event of clickme
document.getElementById("clickme").onclick = updateCount;

