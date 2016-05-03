function blockingAds() {
	return $('.adsbygoogle').css('display') === "none";
}
function blockingGA() {
	return typeof(ga.da) === "undefined";
}

setTimeout(function() {
	document.getElementById("results").innerHTML = "Blocking: Ads: " + blockingAds() + " GA: " + blockingGA();
}, 1000);

document.getElementById("results").innerHTML = "Please standby for fake loading time";
