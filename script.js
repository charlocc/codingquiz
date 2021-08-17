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

scoreCount = 0;
// Question Sets
var question1 = { 
    question:"what is a letter",
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
    choice1: "elephant",
    choice2: "rhino",
    choice3: "mouse",
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

// Wrong answer selected
function wrongAnswer(){
    correctIncorrect.textContent= "Incorrect!";
    console.log ("Incorrect!")
    
    var loss = scoreCount--;
    scoreCount.textContent= loss;
}
// Correct answer selected
function correctAnswer(){
    correctIncorrect.textContent= "Correct!";
    console.log ("Correct!")
    var win = scoreCount++;
    scoreCount.textContent= win;
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
    choice1.addEventListener("click", wrongAnswer);
    choice2.addEventListener("click", wrongAnswer);
    choice3.addEventListener("click", correctAnswer);
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

