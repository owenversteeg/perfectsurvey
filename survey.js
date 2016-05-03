var survey = {
	"questions": [
		{
			"text": "What is your gender?",
			"type": "radio",
			"options": {
				"m": "Male",
				"f": "Female",
				"o": "Other"
			}
		},
		{
			"text": "What is your age?",
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
			"text": "How much time do you spend on the internet on an average weekday / weekend day?",
			"type": "number",
			"unit": "Hours"
		},
		{
			"text": "Do you use any of these adblockers or privacy tools?",
			"type": "checkboxes",
			"options": {
				"abp": "Adblock Plus (ABP)",
				"ublock": "uBlock (shield)",
				"ghostery": "Ghostery (ghost icon)"
			}
		},
		{
			"text": "Which of these sites do you have accounts on?",
			"type": "radio",
			"options": {
				"Facebook": "Facebook",
				"instagram": "Instagram",
				"twitter": "Twitter",
				"tumblr": "tumblr",
				"reddit": "reddit",
				"youtube": "YouTube"
			}
		},
		{
			"text": "Have you ever done any programming?",
			"type": "checkbox"
		}
	]
};

function buildSurvey() {
	var box = $("#survey");
	box.empty();
	survey.questions.forEach(function(question) {
		var row = $("<div></div>").text(question.text);
		var chooser = $("<div></div>");

		var input;
		switch (question.type) {
			case "text":
				input = $("<input>").attr("type", "text");
				chooser.append(input);
				break;
			case "number":
				input = $("<input>").attr("type", "number");
				chooser.append(input);
				chooser.append($("<span class=\"addon\">" + question.unit + "</span>"));
				break;
			case "checkbox":
				input = $("<input>").attr("type", "checkbox");
				chooser.append(input);
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
					var radio = $("<input>").attr("type", "radio");
					var label = $("<label></label>").append(radio);
					radio.val(key);
					label.append(question.options[key]);
					chooser.append(label);
				});
				break;
		}
		row.append(chooser);
		row.append("<br>");
		box.append(row);
	});
}
