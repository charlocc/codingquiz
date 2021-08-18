var timerEl = document.querySelector(".time");
var question = document.querySelector("#question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var correctIncorrect = document.querySelector("#correct-or-incorrect");
var startButton = document.querySelector("#start-quiz-button");
var quizSectionEl = document.querySelector(".quiz-section");
var intro = document.querySelector(".intro-section");
var answerChoices = document.querySelector("#list");
var finalMessage = document.querySelector("#final-message");
var timeLeft= 60;
var highscoreList= document.querySelector(".highscore-list");

var highscores= [];

// Question Sets
var question1 = { 
    question:"Which of the following is not a basic type?",
    choice1: "boolean",
    choice2: "string",
    choice3: "signature",
    choice4: "number",
}
var question2 = { 
    question:"What is javascript?",
    choice1: "A programming language",
    choice2: "What actors use to memorize their lines",
    choice3: "A type of computer",
    choice4: "A type of coffee",
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
    choice4: "dave",
}


// WHEN the user clicks "start quiz", 
function startQuiz(){
// THEN the first question with answer choices appears 
    intro.style.display = "none";
    quizSectionEl.style.display = "block";
    // And the timer begins counting down
    var timeInterval = setInterval(function() {
        timerEl.textContent=timeLeft + " seconds left";
        timeLeft--;

        if(timeLeft===0) {
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
    timeLeft=timeLeft+1;
}

// Makes the quiz section appear
startButton.addEventListener("click", startQuiz);


// Message after losing; Allows user to play again via confirm message
function displayMessage() {
    quizSectionEl.style.display = "none";
    if (confirm("Game Over! Would you like to try again?")){
        location.reload();
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
    var initials = prompt("Please enter your initials", );
    if (initials != null) {
        finalMessage.innerHTML = initials + ", your final score is " + timeLeft;
    } 
    timerEl.style.display = "none";
    renderScores();
}
// WHEN the user finishes the quiz, then an alert appears with their score
function renderScores() {
    
    for (var i = 0; i < highscores.length; i++) {
      var scoreLiEl = document.createElement("li");
      scoreLiEl.textContent = highscores[i];
      highscoreList.appendChild(scoreLiEl);
    }
    storeScores();
    displayHighscores();
}

function storeScores(){
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function displayHighscores(){
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    if(storedHighscores !== null) {
    highscores = storedHighscores;
    }
}


// questionsArray = [question1, question2, question3]
// var questionBank = questionsArray[Math.floor(Math.random() * questionsArray.length)];





