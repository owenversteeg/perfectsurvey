var survey = {
	"questions": [
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
		row.append("<div>Pretend there's a chooser here</div>");
		row.append("<br>");
		box.append(row);
	});
}
