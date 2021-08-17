var timerEl = document.querySelector(".time");
var question = document.querySelector("#question")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var correctIncorrect = document.querySelector("#correct-or-incorrect")
var startButton = document.querySelector("#start-quiz-button")
var quizSectionEl = document.querySelector(".quiz-section")
var intro = document.querySelector(".intro-section")

// Question Sets
var question1 = { 
    question:"what is a letter",
    choice1: "4",
    choice2: "7",
    choice3: "c",
    choice4: "6",
    rightAnswer: "c"
}
var question2 = { 
    question:"what is a dog?",
    choice1: "animal",
    choice2: "boat",
    choice3: "planet",
    choice4: "state",
    rightAnswer: "animal"
}

var question3 = { 
    question:"what is blue?",
    choice1: "grass",
    choice2: "wood",
    choice3: "dirt",
    choice4: "sky",
    rightAnswer: "animal"
}

timerEl.textContent="____________";

// WHEN the user clicks "start quiz", 
function startQuiz(){
// THEN the first question with answer choices appears 
    intro.style.display = "none";
    quizSectionEl.style.display = "block";
    // And the timer begins counting down
    var timeLeft= 120;
    var timeInterval = setInterval(function() {
        timerEl.textContent=timeLeft + " seconds left";
        timeLeft--;

        if(timeLeft ===0) {
            clearInterval(timeInterval);
            timerEl.textContent = " ";
            displayMessage();
        }
    }, 1000);
    firstQuestion();
}

// Makes the quiz section appear
startButton.addEventListener("click", startQuiz);

// Message after losing; Allows user to play again via confirm message
function displayMessage() {
    quizSectionEl.style.display = "none";
    if (confirm("Game Over! Would you like to try again?")){
        startQuiz();
    } 

}


// Lists the question and answer choices
function firstQuestion (){
    question.textContent=question1.question;
    choice1.textContent=question1.choice1;
    choice2.textContent=question1.choice2;
    choice3.textContent=question1.choice3;
    choice4.textContent=question1.choice4;
    correctIncorrect.textContent= "__";
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", wrongAnswer, secondQuestion);
    choice2.addEventListener("click", wrongAnswer, secondQuestion);
    choice4.addEventListener("click", wrongAnswer, secondQuestion);
    choice3.addEventListener("click", correctAnswer, secondQuestion);
}

function secondQuestion(){
    question.textContent=question2.question;
    choice1.textContent=question2.choice1;
    choice2.textContent=question2.choice2;
    choice3.textContent=question2.choice3;
    choice4.textContent=question2.choice4;
    correctIncorrect.textContent= "__";
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", correctAnswer2);
    choice2.addEventListener("click", wrongAnswer2);
    choice4.addEventListener("click", wrongAnswer2);
    choice3.addEventListener("click", wrongAnswer2);
    
}
// Wrong answer selected
function wrongAnswer(){
    correctIncorrect.textContent = "Incorrect!";
}
// Correct answer selected
function correctAnswer(){
    correctIncorrect.textContent = "Correct!";
}



// questionsArray = [question1, question2, question3]
// var questionBank = questionsArray[Math.floor(Math.random() * questionsArray.length)];




// WHEN the user answers a question 
// THEN a "correct" or an "incorrect" alert appears
// THEN the next question and answer choices appear

// WHEN the user finishes the quiz,
// THEN an alert appears with their score
// THEN the user can input their initials (prompt)
// THEN the user can click to see the high scores

