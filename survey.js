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
		},
	]
};

function buildSurvey() {
	var box = $("#survey");
	box.empty();
	survey.questions.forEach(function(question) {
		var row = $("<div></div>").text(question.text);
		row.append("<div>Pretend there's a chooser here</div>");
		row.append("<br>");
		box.append(row);
	});
}
