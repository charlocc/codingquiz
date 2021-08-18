var highscoreList= document.querySelector(".highscore-list");
var highscores= [];

// WHEN the user finishes the quiz, then an alert appears with their score
// function renderScores() {

//     for (var i = 0; i < highscores.length; i++) {
//       var scoreLiEl = document.createElement("li");
//       scoreLiEl.textContent = highscores[i];
//       highscoreList.appendChild(scoreLiEl);
//       scoreLiEl.textContent=localStorage.getItem(initials)
//     }
//     storeScores();
// }

// function storeScores(){
//     localStorage.setItem("highscores", JSON.stringify(highscores));
// }

// function displayHighscores(){
//     var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
//     if(storedHighscores !== null) {
//     highscores = storedHighscores;
//     }
// }

// SET FINAL MESSAGE TO LOCAL STORAGE AND DISPLAY THAT 

localStorage.getItem("initials");
localStorage.getItem("highscores");