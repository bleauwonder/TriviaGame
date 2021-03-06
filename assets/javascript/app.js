// $(document).ready(function() {
    // array of questions
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
    },
    {
		question: "What was the main style of music that Sun Records recorded initially?",
		answers: {
			a: 'Gospel',
			b: 'Blues',
            c: 'Country',
            d: 'Anyone who would come in'
		},
		correctAnswer: 'd'
    },
    {
		question: "Who was the first big talent signed to Sun?",
		answers: {
			a: 'Johnny Cash',
			b: 'Roy Orbison',
            c: 'Elvis Presley',
            d: 'Conway Twitty'
		},
		correctAnswer: 'c'
    },
    {
		question: "Who were considered the Million Dollar Quartet?",
		answers: {
			a: 'Elvis Presley, Carl Perkins, Johnny Cash, Jerry Lee Lewis',
			b: 'Roy Orbison, Charlie Rich, Bill Justis, Harold Jenkins (a.k.a. Conway Twitty)',
            c: 'Jerry Lee Lewis, Roy Orbison, Buddy Holly, Sam Cooke',
            d: 'Elvis Presley, Johnny Cash, Sam Cooke, Chuck Berry'
		},
		correctAnswer: 'a'
    },
    {
		question: "Why is “Rocket 88” considered one of the first rock and roll songs? (recorded at Sun Records 1951)",
		answers: {
			a: 'The producer jerry-rigged the speaker with packing paper and accidentally made the sound fuzzy',
			b: 'It had double string electric guitar riffs that no one had recorded before',
            c: 'It was the first single to have screams, shouts, and yelps over top a frenetic jump blues rhythm',
            d: 'It was about fast cars and fast times set to a steady quick beat.'
		},
		correctAnswer: 'a'
    },
    {
		question: "What was Johnny Cash told when he auditioned at Sun Records in 1954?",
		answers: {
			a: '“You are incredible, let’s get in the recording booth right away.”',
			b: '“You aren’t what we are looking for, thank you.”',
            c: '“Go home and sin, then come back with a song I can sell.”',
            d: '“Please get some voice lessons."'
		},
		correctAnswer: 'c'
    },
    {
		question: "What musical style did Sun Records eventually become best known for?",
		answers: {
			a: 'Country',
			b: 'Rockabilly',
            c: 'Gospel',
            d: 'Rock and Roll'
		},
		correctAnswer: 'b'
    },
    {
		question: "Shelby Singleton purchased Sun Records in 1969. For what label was he a producer?",
		answers: {
			a: 'Janus',
			b: 'A&M”',
            c: 'Neptune',
            d: 'Mercury'
		},
		correctAnswer: 'd'
    },
    {
		question: "Where is Sun Records now located?",
		answers: {
			a: 'Los Angeles, California',
			b: 'Austin, Texas',
            c: 'Nashville, Tennessee',
            d: 'Still in Memphis'
		},
		correctAnswer: 'c'
	}
];
    $('#previous').hide();
    $('#next').hide();
    $('#submit').hide();
    var counter = 0;
    
// Quiz
    function buildQuiz() {
        // blank array to push user answers into, and a correct answers array
        var output = [];
        // for each question, store the list of answer choices
        myQuestions.forEach((currentQuestion, questionNumber) => {
            var answers = [];
            // for each available answer to this question
            for(letter in currentQuestion.answers) {
                // add an html radio button
                answers.push(`<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                );
            }
            output.push(`<div class="slide">
                        <div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join("")} </div>
                        </div>`
                    );
        });

        quizContainer.innerHTML = output.join("");  
        console.log("TCL: buildQuiz -> output", output)
    }
    
    function showResults() {
        // gather answer containers from our quiz
            var allAnswers = quizContainer.querySelectorAll('.answers');
			console.log("TCL: showResults -> allAnswers", allAnswers)
            // keep track of user's answers
            var numCorrect = 0;
            var unanswered = 0;
            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // find selected answer
                var answerContainer = allAnswers[questionNumber];
                var selector = `input[name=question${questionNumber}]:checked`;
                var isChecked = answerContainer.querySelector(selector);
                var userAnswer = isChecked ? isChecked.value : '';

                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;
                    // color the answers green
                    // allAnswers[questionNumber].style.color = 'lightgreen';
                    }
                else if (userAnswer === '') {
                    unanswered++;
                }
                // if answer is wrong or blank
                else {
                    // color the answers red
                    allAnswers[questionNumber].style.color = 'red';
                    }
                }); 
        // show number of correct answers out of total
            resultsContainer.innerHTML = 'Wow...You "walked the line" and got ' + numCorrect + ' out of ' + myQuestions.length + ' answers correct';
            $('#counter').html('in ' + counter + " seconds!");
    }

    function showSlide(n) {
        $(slides[currentSlide]).removeClass('active-slide');
        $(slides[n]).addClass('active-slide');
        currentSlide = n;
        if(currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = "inline-block";
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    submitButton = document.getElementById("submit");

    buildQuiz();

    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    nextButton.addEventListener("click", showNextSlide);
    previousButton.addEventListener("click", showPreviousSlide);
    submitButton.addEventListener("click", showResults);

    var interval;
    var intervalTime;
    

    function startTimer() {
         clearInterval(interval);
        interval= setInterval(gameOver, 60000);
        clearInterval(intervalTime);
        intervalTime = setInterval(increment, 1000);
    }
    function increment() {
        console.log(counter);
        counter++;
    }

    function gameOver() {
        clearInterval(interval);
        clearInterval(intervalTime);
        $("#previous").hide();
        $("#submit").hide();
        $(".slide").hide();
        $('.active-slide').removeClass('.active-slide');
        showResults(myQuestions, quizContainer, resultsContainer)  
    }

    $(".startBtn").click(function() {
        $("p").hide();
        $(".startBtn").hide();
        showSlide(0);
        startTimer();
    });
   
    // when user clicks submit, show results, show Sun Records gif, play Great Balls of Fire
    submitButton.onclick = function() {
        gameOver(); 
        x = new Audio("assets/images/GreatBallsOfFire.mp3")
        x.play();
    }
        
    // API for a Sun Records Giphy. Did not quite get working yet
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=sun+records&api_key=jsLMS8xwk7FnnuMsoZPlzQnjmRLUTHKl&limit=1";
        //     $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function(response) {
        //     $("#results").text(JSON.stringify(response));
        // });
    

   

    





