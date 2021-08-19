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
var questionSets= [{ 
    question:"Which of the following is not a basic type?",
    choice1: "boolean",
    choice2: "string",
    choice3: "signature",
    choice4: "number",
    answer: "signature",
},
{ 
    question: "What is javascript?",
    choice1: "A programming language",
    choice2: "What actors use to memorize their lines",
    choice3: "A type of computer",
    choice4: "A type of coffee",
    answer: "A programming language",
},
{ 
    question: "Which of the following is not a common window object method in javascript?",
    choice1: "prompt()",
    choice2: "alert()",
    choice3: "confirm()",
    choice4: "delay()",
    answer: "delay()",
},
{ 
    question: "When could you use a conditional statement?",
    choice1: "to specify you want a block of code to be executed, if a specified condition is true",
    choice2: "to set a variable name",
    choice3: "to reload the page",
    choice4: "to create a new html file",
    answer: "to specify you want a block of code to be executed, if a specified condition is true",
},
{ 
    question:"What variables have name:value pairs?",
    choice1: "Const",
    choice2: "Objects",
    choice3: "Let",
    choice4: "Var",
    answer: "Objects",
}]




// WHEN the user clicks "start quiz", 
function startQuiz(){
// THEN the first question with answer choices appears 
    intro.style.display = "none";
    quizSectionEl.style.display = "block";
    // And the timer begins counting down
    var timeInterval = setInterval(function() {
        timerEl.textContent=timeLeft + " seconds left";
        timeLeft--;

        if(timeLeft===0 || i>4) {
            clearInterval(timeInterval);
            timerEl.textContent = " ";
            displayMessage();
        } 
    }, 1000);
    setUpQuestion();
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

correctIncorrect.textContent= "pick an answer";
var i = 0 

// Lists the question and answer choices
function setUpQuestion (){
    if(i>4){
        return promptInitials();
    }
    question.textContent=questionSets[i].question;
    choice1.textContent=questionSets[i].choice1;
    choice2.textContent=questionSets[i].choice2;
    choice3.textContent=questionSets[i].choice3;
    choice4.textContent=questionSets[i].choice4;
}

choice1.addEventListener("click", function(){
    if(questionSets[i].choice1 === questionSets[i].answer){
        correctIncorrect.textContent= "Correct!";
    } else {
        correctIncorrect.textContent= "Incorrect!";
        timeLeft=timeLeft-10;
    }
    i++;
    setUpQuestion();
})

choice2.addEventListener("click", function(){
    if(questionSets[i].choice2 === questionSets[i].answer){
        correctIncorrect.textContent= "Correct!";
    } else {
        correctIncorrect.textContent= "Incorrect!";
        timeLeft=timeLeft-10;
    }
    i++;
    setUpQuestion();
})

choice3.addEventListener("click", function(){
    if(questionSets[i].choice3 === questionSets[i].answer){
        correctIncorrect.textContent= "Correct!";
    } else {
        correctIncorrect.textContent= "Incorrect!";
        timeLeft=timeLeft-10;
    }
    i++;
    setUpQuestion();
})

choice4.addEventListener("click", function(){
    if(questionSets[i].choice4 === questionSets[i].answer){
        correctIncorrect.textContent= "Correct!";
    } else {
        correctIncorrect.textContent= "Incorrect!";
        timeLeft=timeLeft-10;
    }
    i++;
    setUpQuestion();
}) 



// THEN the user can input their initials (prompt)
function promptInitials(){
    var initials = prompt("Please enter your initials", );
    if (initials != null) {
        finalMessage.innerHTML = initials + ": Score = " + timeLeft + "!";
        localStorage.setItem("initials", initials);
        localStorage.setItem("highscores", timeLeft);
    }
    timerEl.style.display = "none";
    clearTimeout(timerEl);
}
// Then an alert appears with their score






