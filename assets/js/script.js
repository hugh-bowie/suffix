var initialTime = 1000;
var time = 1000;
var score = 0;
var quizCount = 0;
var setTime;
var answers = document.querySelectorAll('#quizHolder button');
var clock;
var recordsArray = [];

var consoleMessage = () => {
	let consoleMessage = `
    Developed by Hugh Bowie
    https://hugh-bowie.github.io/code-quiz/
    `
	console.log(consoleMessage);
};



var pageContentEl = function (element) {
	return document.querySelector(element);
};

var myTimer = function () {
	if (time > 0) {
		time = time - 1;
		pageContentEl('#time').innerHTML = time;
	} else {
		clearInterval(clock);
		pageContentEl('#score').innerHTML = score;
		onlyDisplaySection("#finish");
	}
};


var onlyDisplaySection = function (element) {
	let sections = document.querySelectorAll("section");
	Array.from(sections).forEach(function (userItem) {
		userItem.classList.add('hide');
	});
	pageContentEl(element).classList.remove('hide');
};

var quizUpdate = function (answerCopy) {
	pageContentEl('#scoreAlert p').innerHTML = answerCopy;
	pageContentEl('#scoreAlert').classList.remove('invisible', scoreAlert());
	Array.from(answers).forEach(answer => {
		answer.classList.add('disable');
	});

	setTimeout(function () {
		if (quizCount === questions.length) {
			onlyDisplaySection("#finish");
			time = 0;
			pageContentEl('#time').innerHTML = time;
		} else {
			setQuestionData();
			Array.from(answers).forEach(answer => {
				answer.classList.remove('disable');
			});
		}
	}, 1000);
};



var setQuestionData = function () {
	pageContentEl('#quizHolder p').innerHTML = questions[quizCount].title;
	pageContentEl('#quizHolder button:nth-of-type(1)').innerHTML = `1. ${questions[quizCount].choices[0]}`;
	pageContentEl('#quizHolder button:nth-of-type(2)').innerHTML = `2. ${questions[quizCount].choices[1]}`;
	pageContentEl('#quizHolder button:nth-of-type(3)').innerHTML = `3. ${questions[quizCount].choices[2]}`;
	pageContentEl('#quizHolder button:nth-of-type(4)').innerHTML = `4. ${questions[quizCount].choices[3]}`;
};

var scoreAlert = function () {
	clearTimeout(setTime);
	setTime = setTimeout(function () {
		pageContentEl('#scoreAlert').classList.add('invisible');
	}, 1000);
};

var errorAlert = function () {
	clearTimeout(setTime);
	setTime = setTimeout(function () {
		pageContentEl('#errorAlert').classList.add('invisible');
	}, 3000);
};

// initials data validation
var enterInitials = function () {
	let initialsRecord = pageContentEl('#initials').value;
	if (initialsRecord === '') {
		pageContentEl('#errorAlert p').innerHTML = "You need at least 1 character";
		pageContentEl('#errorAlert').classList.remove('invisible', errorAlert());
	} else if (initialsRecord.match(/[[A-Za-z]/) === null) {
		pageContentEl('#errorAlert p').innerHTML = "Only letters for initials allowed.";
		pageContentEl('#errorAlert').classList.remove('invisible', errorAlert());
	} else if (initialsRecord.length > 5) {
		pageContentEl('#errorAlert p').innerHTML = "Maximum of 5 characters allowed.";
		pageContentEl('#errorAlert').classList.remove('invisible', errorAlert());
	} else {
		recordsArray.push({
			"initialRecord": initialsRecord,
			"score": score
		});

		localStorage.setItem('recordsArray', JSON.stringify(recordsArray));
		pageContentEl('#highScores div').innerHTML = '';
		onlyDisplaySection("#highScores");
		recordsHtmlReset();
		pageContentEl("#initials").value = '';
	}
};

var clearHighScores = function () {
	recordsArray = [];
	pageContentEl('#highScores div').innerHTML = "";
	localStorage.removeItem('recordsArray');
};

var quizReset = function () {
	time = initialTime;
	score = 0;
	quizCount = 0;
	onlyDisplaySection("#intro");
};

var startQuiz = function () {
	setQuestionData();
	onlyDisplaySection("#quizHolder");
	clock = setInterval(myTimer, 1000);
};

const getWord = document.querySelector('#word')

var viewHighScores = function (e) {
	e.preventDefault();
	clearInterval(clock);
	pageContentEl('#time').innerHTML = 0;
	time = initialTime;
	score = 0;
	quizCount = 0;
	onlyDisplaySection("#highScores");
	recordsHtmlReset();
};

var scoreTimeAdjust = function () {
	if (this.innerHTML.substring(3, this.length) === questions[quizCount].answer) {
		score = score + 1;
		quizCount = quizCount + 1;
		quizUpdate("Correct");
	} else {
		time = time - 5;
		quizCount = quizCount + 1;
		quizUpdate("Incorrect");
	}
};


var recordsHtmlReset = function () {
	pageContentEl('#highScores div').innerHTML = "";
	let i = 1;
	recordsArray.sort((a, b) => b.score - a.score);
	Array.from(recordsArray).forEach(check => {
		var scores = document.createElement("div");
		scores.innerHTML = i + ". " + check.initialRecord + " - " + check.score;
		pageContentEl('#highScores div').appendChild(scores);
		i = i + 1;
	});
	i = 0;
	Array.from(answers).forEach(answer => {
		answer.classList.remove('disable');
	});
};

(localStorage.getItem('recordsArray')) ? recordsArray = JSON.parse(localStorage.getItem('recordsArray')) : recordsArray = [];

//Add event listeners to all buttons

Array.from(answers).forEach(check => { check.addEventListener('click', scoreTimeAdjust); });

pageContentEl("#go").addEventListener("click", startQuiz);

pageContentEl("#records button").addEventListener("click", enterInitials);

pageContentEl("#clearScores").addEventListener("click", clearHighScores);

pageContentEl("#reset").addEventListener("click", quizReset);

pageContentEl("#scores").addEventListener("click", viewHighScores);

consoleMessage();