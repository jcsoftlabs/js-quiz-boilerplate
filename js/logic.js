var playing = false;
var score = 0;
var action;
var timeRemaining;
var correctAnswer;

document.getElementById('startreset').onclick = function() {
	if (playing == true) {
		location.reload();
	} else {
		playing = true;
		score = 0;

		document.getElementById('scoreincrease').innerHTML = score;

		document.getElementById('time').style.display = 'Block';
		timeRemaining = 60;
		document.getElementById('timeremaining').innerHTML = timeRemaining;
		hide('gameover');

		document.getElementById('startreset').innerHTML = 'Reset Game';

		startCountdown();

		//generate a new Q&A
		generateQA();
	}
};

//functions

//start counter

function startCountdown() {
	action = setInterval(function() {
		timeRemaining -= 1;
		if (timeRemaining == 00) {
			//game over
			stopCountDown();
			document.getElementById('gameover').style.display = 'Block';
			document.getElementById('gameover').innerHTML = '<p>Game Over!</p><p>Your Score Is ' + score + '</p>';
			document.getElementById('time').style.display = 'none';
			hide('correct');
			hide('wrong');
			playing = false;
			changeStartReset('startreset', 'Start Game');
		}
		document.getElementById('timeremaining').innerHTML = timeRemaining;
	}, 1000);
}

//stop the counter
function stopCountDown() {
	clearInterval(action);
}

//hide an element
function hide(Id) {
	document.getElementById(Id).style.display = 'none';
}

//show certain element
function show(Id) {
	document.getElementById(Id).style.display = 'Block';
}

function changeStartReset(Id, string) {
	document.getElementById(Id).innerHTML = string;
}

//generate question and multiple answers
function generateQA() {
	var x = 1 + Math.round(9 * Math.random());
	var y = 1 + Math.round(9 * Math.random());
	correctAnswer = x * y;

	document.getElementById('question').innerHTML = x + 'x' + y;
	var correctPosition = 1 + Math.round(3 * Math.random());

	document.getElementById('box' + correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

	//fill other boxes with wrong answer

	for (i = 1; i < 5; i++) {
		if (i !== correctPosition) {
			var wrongAnswer;
			do {
				wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); //a wrong answer
				document.getElementById('box' + i).innerHTML = wrongAnswer;
			} while (wrongAnswer == correctAnswer);
		}
	}
}


const MessagingResponse =
  require("twilio").twiml.MessagingResponse;

  app.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message("Thanks for signing up!");
    res.end(twiml.toString());
  });
