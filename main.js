
function survey() {
	ghostery = false;
	uBlock = false;
	getAdblock = false;

	var debug = $("#debug");

	if ($('#projectwonderful').width() === 1) ghostery = true;
	if ($('#projectwonderful').width() === 0) uBlock = true;
	if ($('#websitealive').width() === 1) ghostery = true;
	if ($('#doubleclick').css('opacity') === "0") getAdblock = true;
	
	adblockPlus = !isNaN(+$('.adsbygoogle').css('orphans'));
	debug.empty();

	["#projectwonderful", "#websitealive", "#doubleclick", ".adsbygoogle"]
		.forEach(function(selector) {
		debug.append(selector + ": " + JSON.stringify(css($(selector))) + "<br>");
	});

	debug.append('using ghostery: ' + ghostery + ', using uBlock: ' + uBlock + ', using adblock: ' + getAdblock + ', using ABP: ' + adblockPlus)
}
setTimeout(survey, 1000);


function css(a) {
	var sheets = document.styleSheets, o = {};
	for (var i in sheets) {
		var rules = sheets[i].rules || sheets[i].cssRules;
		for (var r in rules) {
			if (a.is(rules[r].selectorText)) {
				o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
			}
		}
	}
	return o;
}

function css2json(css) {
	var s = {};
	if (!css) return s;
	if (css instanceof CSSStyleDeclaration) {
		for (var i in css) {
			if ((css[i]).toLowerCase) {
				s[(css[i]).toLowerCase()] = (css[css[i]]);
			}
		}
	} else if (typeof css == "string") {
		css = css.split("; ");
		for (var i in css) {
			var l = css[i].split(": ");
			s[l[0].toLowerCase()] = (l[1]);
		}
	}
	return s;
}