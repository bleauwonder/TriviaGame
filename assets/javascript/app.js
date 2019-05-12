$(document).ready(function() {

    $(".startBtn").on("click", function(e) {
        var value = parseInt(e.target.value);
        console.log(value)
        userTotal += value;
        $("#total-counter").html(userTotal);

// Countdown clock
var number = 60;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time's Up!")
    }
  }
    function stop() {
      clearInterval(intervalId);
    }
    run();

// Quiz
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

});

// On load, the perseon will see the title of the Trivia Game and a Start button to click
// On click, the game starts with a 60 second countdown clock at the top
    // need a click even that will take the player to the quiz page, which looks different from the start page.
// There will be multiple choice questions to answer within the 60 seconds counting down.
    // Player will be able to click which option they want for each question and have a DONE button at the end
// One more page shows an All Done with the correctly and incorrectly answered questions and unanswered.
    // Users answers will be kept track of and on clicks

    // setTimeout(oneMinute, 1000 * 60);