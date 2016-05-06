setTimeout(function() {
	var ghostery = false;
	var uBlock = false;

	if ($('#projectwonderful').width() === 1) ghostery = true;
	if ($('#projectwonderful').width() === 0) {
		uBlock = true;
	}

	if ($('#websitealive').width() === 1) ghostery = true;

	alert('using ghostery: ' + ghostery + ', using uBlock: ' + uBlock + ' undefined means we don\'t know')
}, 1000);
