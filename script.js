var timerEl = document.querySelector(".time");
var question = document.querySelector("#question")
var answer1 = document.querySelector("#choice1")
var answer2 = document.querySelector("#choice2")
var answer3 = document.querySelector("#choice3")
var answer4 = document.querySelector("#choice4")
var startButton = document.querySelector("#start-quiz-button")
var quizSectionEl = document.querySelector(".quiz-section")

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

// WHEN the user clicks "start quiz", 
function startQuiz(){
// THEN the first question with answer choices appears 
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
}

// Makes the quiz section appear
startButton.addEventListener("click", startQuiz);

function newQuestion (){
    

}



questionList = [question1, question2, question3]




// THEN a timer appears

// WHEN the user answers a question 
// THEN a "correct" or an "incorrect" alert appears
// THEN the next question and answer choices appear

// WHEN the user finishes the quiz,
// THEN an alert appears with their score
// THEN the user can input their initials (prompt)
// THEN the user can click to see the high scores

