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
var answerChoices = document.querySelector("#list")
var scoreCount = document.querySelector("#score")
var finalMessage = document.getElementById("final-message")
var timeLeft= 60;

// Question Sets
var question1 = { 
    question:"what is a letter?",
    choice1: "4",
    choice2: "7",
    choice3: "c",
    choice4: "6",
}
var question2 = { 
    question:"what is a dog?",
    choice1: "animal",
    choice2: "boat",
    choice3: "planet",
    choice4: "state",
}

var question3 = { 
    question:"what is blue?",
    choice1: "grass",
    choice2: "wood",
    choice3: "dirt",
    choice4: "sky",
}

var question4 = { 
    question:"what is small?",
    choice1: "mouse",
    choice2: "rhino",
    choice3: "elephant",
    choice4: "planet",
}

var question5 = { 
    question:"what is my name?",
    choice1: "doug",
    choice2: "charlotte",
    choice3: "sarah",
    choice4: "brad",
}

timerEl.textContent="____________";


// WHEN the user clicks "start quiz", 
function startQuiz(){
// THEN the first question with answer choices appears 
    intro.style.display = "none";
    quizSectionEl.style.display = "block";
    // And the timer begins counting down
    var timeInterval = setInterval(function() {
        timerEl.textContent=timeLeft + " seconds left";
        timeLeft--;

        if(timeLeft <=0) {
            clearInterval(timeInterval);
            timerEl.textContent = " ";
            displayMessage();
        }
    }, 1000);
    firstQuestion();
}

// Wrong answer selected
function wrongAnswer(){
    correctIncorrect.textContent= "Incorrect!";
    timeLeft=timeLeft-10;
}
// Correct answer selected
function correctAnswer(){
    correctIncorrect.textContent= "Correct!";
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
    correctIncorrect.textContent= "pick an answer";
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", wrongAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice4.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", correctAnswer);
    answerChoices.addEventListener("click", secondQuestion);
}
function secondQuestion(){
    question.textContent=question2.question;
    choice1.textContent=question2.choice1;
    choice2.textContent=question2.choice2;
    choice3.textContent=question2.choice3;
    choice4.textContent=question2.choice4;
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", correctAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", wrongAnswer); 
    choice4.addEventListener("click", wrongAnswer);
    answerChoices.addEventListener("click", thirdQuestion);
}
function thirdQuestion(){
    question.textContent=question3.question;
    choice1.textContent=question3.choice1;
    choice2.textContent=question3.choice2;
    choice3.textContent=question3.choice3;
    choice4.textContent=question3.choice4;
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", wrongAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", wrongAnswer);
    choice4.addEventListener("click", correctAnswer);
    answerChoices.addEventListener("click", fourthQuestion);
}
function fourthQuestion(){
    question.textContent=question4.question;
    choice1.textContent=question4.choice1;
    choice2.textContent=question4.choice2;
    choice3.textContent=question4.choice3;
    choice4.textContent=question4.choice4;
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", correctAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", wrongAnswer);
    choice4.addEventListener("click", wrongAnswer);
    answerChoices.addEventListener("click", fifthQuestion);
}
function fifthQuestion(){
    question.textContent=question5.question;
    choice1.textContent=question5.choice1;
    choice2.textContent=question5.choice2;
    choice3.textContent=question5.choice3;
    choice4.textContent=question5.choice4;
    // Indicate if the correct or incorrect answer is selected
    choice1.addEventListener("click", wrongAnswer);
    choice2.addEventListener("click", correctAnswer);
    choice3.addEventListener("click", wrongAnswer);
    choice4.addEventListener("click", wrongAnswer);
    answerChoices.addEventListener("click", promptInitials); 
}
// THEN the user can input their initials (prompt)
function promptInitials(){
    var initials = prompt("Please enter your initials", "initials");
        if (initials != null) {
        finalMessage.innerHTML = initials + ", your final score is " + timeLeft;
    }
    timerEl.textContent="____________";
}


// questionsArray = [question1, question2, question3]
// var questionBank = questionsArray[Math.floor(Math.random() * questionsArray.length)];




// WHEN the user finishes the quiz,
// THEN an alert appears with their score
// THEN the user can input their initials (prompt)
// THEN the user can click to see the high scores

