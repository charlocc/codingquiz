var highscoreList= document.querySelector(".highscore-list");
var highscores= [];

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