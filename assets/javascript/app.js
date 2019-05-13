$(document).ready(function() {

    $(".startBtn").on("click", function(e) {
        $("#quiz").html(generateQuiz(questions, quizContainer, resultsContainer, submitButton));

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
});

// Quiz
var myQuestions = [
	{
		question: "Who launched Sun Records in February of 1952?",
		answers: {
			a: 'Scott Robinson',
			b: 'Sam Phillips',
            c: 'Emile Berliner',
            d: 'Johnny Mercer',
		},
		correctAnswer: 'b'
	},
	{
		question: "How did Sun Records get its moniker?",
		answers: {
			a: 'The founder is perpetually optimistic',
			b: 'It’s mostly sunny in Memphis',
            c: 'The found really likes astronomy but wanted to stay simple',
            d: 'It’s a simple name for simply great music'
		},
		correctAnswer: 'a'
	}
];
var quizContainer;
var resultsContainer;
var submitButton;

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
        // for each question
        for(var i = 0; i < questions.length; i++) {
            answers = [];
            for(letter in questions[i].answers) {
                // $("input['question' + i +]:checked").val(letter);
                // letter
                answers.push('<label>' + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': ' + questions[i].answers[letter] + '</label>')
            }
        }
	}
        output.push('<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
   

	function showResults(questions, quizContainer, resultsContainer){
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}
	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
	

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
    
    $('quiz').html(quizContainer);
    $('results').html(resultsContainer);
    $('submit').html(submitButton);

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
});

// On load, the perseon will see the title of the Trivia Game and a Start button to click
// On click, the game starts with a 60 second countdown clock at the top
    // need a click even that will take the player to the quiz page, which looks different from the start page.
// There will be multiple choice questions to answer within the 60 seconds counting down.
    // Player will be able to click which option they want for each question and have a DONE button at the end
// One more page shows an All Done with the correctly and incorrectly answered questions and unanswered.
    // Users answers will be kept track of and on clicks

    // setTimeout(oneMinute, 1000 * 60);