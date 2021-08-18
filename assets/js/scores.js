var highscoreList = document.querySelector(".highscore-list");
var scoreArray= [];



function createList() {
  var storedInitials = localStorage.getItem("initials");
  var storedHighscores = localStorage.getItem("highscores");
  var storedData = {
    sInitials: storedInitials,
    sHighscores: storedHighscores
  };
  scoreArray.push(storedData);
  
  if(!scoreArray){
    return;
  }

  for (var i = 0; i < scoreArray.length; i++) {
    var scoreLiEl = document.createElement('li');
    scoreLiEl.textContent= storedInitials + ", Score: " + storedHighscores;
    highscoreList.appendChild(scoreLiEl);
  }
}

createList();


// SET FINAL MESSAGE TO LOCAL STORAGE AND DISPLAY THAT 
