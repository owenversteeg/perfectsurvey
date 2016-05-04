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
		{
			"text": "Have you ever done any programming?",
			"type": "boolean"
		}
	]
};

function buildSurvey() {
	var box = $("#survey");
	box.empty();
	survey.questions.forEach(function(question, index) {
		var row = $("<div></div>").addClass("question");
		row.append($("<header></header>").text(question.text));
		var chooser = $("<div></div>");

		var fieldName = "name-" + index;

		var input;
		switch (question.type) {
			case "text":
				input = $("<input>").attr({"type": "text", "name": fieldName});
				chooser.append(input);
				break;
			case "number":
				input = $("<input>").attr({"type": "number", "name": fieldName});
				chooser.append(input);
				chooser.append($("<span class=\"addon\">" + question.unit + "</span>"));
				break;
			case "boolean":
				input = $("<input>").attr({"type": "radio", "name": fieldName}).val("true");
				var label = $("<label></label>").append(input).append(" Yes");
				chooser.append(label);

				input = $("<input>").attr({"type": "radio", "name": fieldName}).val("false");
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
					var radio = $("<input>").attr({"type": "radio", "name": fieldName});
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
				break;
		}
		row.append(chooser);
		row.append("<br>");
		box.append(row);
	});
	var submit = $("<input>").attr("type", "submit").val("Submit");
	box.append(submit);
}
