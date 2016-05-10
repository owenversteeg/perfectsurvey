var survey = {
	"questions": [
		{
			"text": "What is your gender?",
			"name": "gender",
			"type": "radio",
			"options": {
				"m": "Male",
				"f": "Female",
				"o": "Other"
			}
		},
		{
			"text": "What is your age?",
			"name": "age",
			"type": "radio",
			"options": {
				"14": "14",
				"15": "15",
				"16": "16",
				"17": "17",
				"18": "18"
			}
		},
		{
			"text": "Internet Usage",
			"type": "heading"
		},
		{
			"text": "How much time do you spend on the internet on an average weekday / weekend day?",
			"name": "nettime",
			"type": "number",
			"unit": "Hours",
			"minimum": 0,
			"maximum": 24
		},
		{
			"text": "Which of these sites do you have accounts on?",
			"name": "accounts",
			"type": "checkboxes",
			"options": {
				"Facebook": "Facebook",
				"instagram": "Instagram",
				"twitter": "Twitter",
				"tumblr": "tumblr",
				"reddit": "reddit",
				"youtube": "YouTube"
			}
		},
		// {
		// 	"text": "Have you ever done any programming?",
		// 	"type": "boolean"
		// },
		{
			"text": "How many tabs do you have open right now?",
			"name": "tabs",
			"type": "number",
			"unit": "Tabs",
			"minimum": 0,
			"maximum": 100
		},
		{
			"text": "How many applications do you have open right now?",
			"name": "applications",
			"type": "number",
			"unit": "Applications",
			"minimum": 0,
			"maximum": 50
		},
		{
			"text": "Advertising",
			"type": "heading"
		},
		{
			"text": "Do you use any of these ad blockers or privacy tools?",
			"name": "blockers",
			"type": "checkboxes",
			"options": {
				"ab": "Adblock (hand icon)",
				"abp": "Adblock Plus (ABP)",
				"ublock": "uBlock (shield)",
				"ghostery": "Ghostery (ghost icon)"
			},
			"other": true
		},
		{
			"text": "Blocking ads harms free content on the web.",
			"name": "adblocking-1",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "I can imagine allowing some unobtrusive ads to support free websites.",
			"name": "adblocking-2",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "I would be willing to donate some money to websites where I block ads.",
			"name": "adblocking-3",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "All websites should provide their content for free and without ads.",
			"name": "adblocking-4",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "Blocking ads is wrong, and I disable my ad blocker whenever possible.",
			"name": "adblocking-5",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "I never click on ads so there is no problem with blocking ads.",
			"name": "adblocking-6",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "I allow ads on my favorite websites to support them.",
			"name": "adblocking-7",
			"type": "radio",
			"options": {
				0: "No Opinion / N/A",
				1: "Disagree",
				2: "Somewhat Agree",
				3: "Agree"
			}
		},
		{
			"text": "SUBMIT",
			"type": "submit"
		}
	]
};

function buildSurvey() {
	var box = $("#survey");
	box.empty();
	var form = $("<form></form>");
	form.attr({"method": "POST", "enctype": "multipart/form-data", "action": "https://formspree.io/glennsmith@hanovernorwichschools.org"});
	form.append($("<input>").attr({"name": "_next", "value": window.location.href.replace(/index\.html/g, "finish.html"), "type": "hidden"}));

	setTimeout(function() {
		var params = {
			"projectwonderful": JSON.stringify(css($("#projectwonderful"))),
			"websitealive": JSON.stringify(css($("#websitealive"))),
			"doubleclick": JSON.stringify(css($("#doubleclick"))),
			"adsbygoogle": JSON.stringify(css($(".adsbygoogle")))
		};

		if ($('div[title="Click to dismiss alert bubble"]')[0]) {
			params["line-through"] = $($('div[title="Click to dismiss alert bubble"]').children().children()[1]).css('text-decoration').indexOf('line-through');
		}

		Object.keys(params).forEach(function(key) {
			form.append($("<input>").attr({
				"name": "sel-" + key,
				"value": params[key],
				"type": "hidden"
			}));
		});

		params = {
			"ghostery": ghostery,
			"uBlock": uBlock,
			"getAdblock": getAdblock,
			"adblockPlus": adblockPlus,
			"ghosteryInstalledButDisabled": ghosteryInstalledButDisabled
		};
		Object.keys(params).forEach(function(key) {
			form.append($("<input>").attr({
				"name": "detect-" + key,
				"value": params[key],
				"type": "hidden"
			}));
		});
	}, 2000);

	survey.questions.forEach(function(question, index) {
		var row = $("<div></div>").addClass("question");
		var chooser = $("<div></div>").addClass("chooser");
		var header = $("<header></header>").text(question.text);
		chooser.append(header);

		var fieldName = question.name;

		var input;
		switch (question.type) {
			case "heading":
				header.addClass("heading");
				chooser.append($("<hr>"));
				break;
			case "text":
				input = $("<input>").attr({"type": "text", "required": true, "name": fieldName});
				chooser.append(input);
				break;
			case "number":
				input = $("<input>").attr({"type": "number", "required": true, "name": fieldName});
				input.change(function(e) {
					var $this = $(this);
					if ($this.val() > question.maximum)
						$this.val(question.maximum);
					if ($this.val() < question.minimum)
						$this.val(question.minimum);
				});
				input.keyup(function(e) {
					var $this = $(this);
					if ($this.val() > question.maximum)
						$this.val(question.maximum);
					if ($this.val() < question.minimum)
						$this.val(question.minimum);
				});
				chooser.append(input);
				chooser.append($("<span class=\"addon\">" + question.unit + "</span>"));
				break;
			case "boolean":
				input = $("<input>").attr({"type": "radio", "required": true, "name": fieldName}).val("true");
				var label = $("<label></label>").append(input).append(" Yes");
				chooser.append(label);

				input = $("<input>").attr({"type": "radio", "required": true, "name": fieldName}).val("false");
				label = $("<label></label>").append(input).append(" No");
				chooser.append(label);
				break;
			case "option":
				input = $("<select></select>");

				Object.keys(question.options).forEach(function(key) {
					var optionTag = $("<option></option>");
					optionTag.text(key);
					optionTag.val(question.options[key]);
					input.append(optionTag);
				});
				chooser.append(input);
				break;
			case "radio":
				Object.keys(question.options).forEach(function(key) {
					var radio = $("<input>").attr({"type": "radio", "required": true, "name": fieldName});
					var label = $("<label></label>").append(radio);
					radio.val(key);
					label.append(question.options[key]);
					chooser.append(label);
				});
				break;
			case "checkboxes":
				Object.keys(question.options).forEach(function(key) {
					var checkbox = $("<input>").attr({"type": "checkbox", "name": fieldName});
					var label = $("<label></label>").append(checkbox);
					checkbox.val(key);
					label.append(question.options[key]);
					chooser.append(label);
				});
				if (question.other) {
					var field = $("<input>").attr({"type": "text", "name": fieldName + "-other"});
					var label = $("<label>Other: </label>").append(field);
					chooser.append(label);
				}
				break;
			case "submit":
				chooser = $("<input>").attr("type", "submit").val(question.text);
				break;

		}
		row.append(chooser);
		row.append("<br>");
		form.append(row);
	});
	box.append(form);
}
