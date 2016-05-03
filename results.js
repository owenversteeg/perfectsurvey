function isBlockingAdsByGoogle() {
	return $('.adsbygoogle').css('display') === "none";
}
function isBlockingGA() {
	return typeof(ga.da) === "undefined";
}

function isRunningGhostery() {
	return isBlockingGA() && !isBlockingAdsByGoogle();
}

function isRunningSomeAdblock() {
	return isBlockingAdsByGoogle();
}

setTimeout(function() {
	var running = "";
	if (isRunningGhostery()) {
		running += "Ghostery ";
	}
	if (isRunningSomeAdblock()) {
		if (isBlockingGA()) {
			running += "Possibly Ghostery ";
		}
		running += "Some Adblock ";
	}
	document.getElementById("results").innerHTML = "Running: " + running;
}, 1000);

document.getElementById("results").innerHTML = "Please standby for fake loading time";
