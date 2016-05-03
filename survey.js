var survey = {
	"questions": [
		{
			"text": "What is your gender?",
			"type": "option",
			"options": {
				"Male": "m",
				"Female": "f",
				"Other": "o"
			}
		},
		{
			"text": "What is your age?",
			"type": "option",
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
			"type": "number"
		},
		{
			"text": "Do you use any of these adblockers or privacy tools?",
			"type": "option",
			"options": {
				"Adblock Plus (ABP)": "abp",
				"uBlock (shield)": "ublock",
				"Ghostery (ghost icon)": "ghostery"
			}
		},
		{
			"text": "Which of these sites do you have accounts on?",
			"type": "option",
			"options": {
				"Facebook": "Facebook",
				"Instagram": "instagram",
				"Twitter": "twitter",
				"tumblr": "tumblr",
				"reddit": "reddit",
				"YouTube": "youtube"
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
				break;
			case "number":
				input = $("<input>").attr("type", "number");
				break;
			case "checkbox":
				input = $("<input>").attr("type", "checkbox");
				break;
			case "option":
				input = $("<select>");

				Object.keys(question.options).forEach(function(key) {
					var optionTag = $("<option></option>");
					optionTag.text(key);
					optionTag.val(question.options[key]);
					input.append(optionTag);
				});
				break;
		}
		chooser.append(input);
		row.append(chooser);
		row.append("<br>");
		box.append(row);
	});
}
