setTimeout(function() {
	var ghostery = false;
	var uBlock = false;
	var getAdblock = false;

	if ($('#projectwonderful').width() === 1) ghostery = true;
	if ($('#projectwonderful').width() === 0) uBlock = true;
	if ($('#websitealive').width() === 1) ghostery = true;
	if ($('#doubleclick').css('opacity') === "0") getAdblock = true;

	alert('using ghostery: ' + ghostery + ', using uBlock: ' + uBlock + ', using adblock: ' + getAdblock + ', using ABP: ' + adblockPlus)
}, 1000);
