let scores, roundScore, activePlayer, gamePlaying, points = 10;

init();
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;
    const diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";
    if (dice !== 1) {
      roundScore = dice;
      document.querySelector("#current-" + activePlayer).textContent = dice;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".otpr").addEventListener("click", function() {
  points = +document.querySelector(".points").value;
  console.log('points', points);
  document.querySelector(".points").value = "";
  document.querySelector(".points").style.display = 'none';
  document.querySelector(".otpr").style.display = 'none';
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= points) {
      document.querySelector("#name-" + activePlayer).textContent =
        "Победитель!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("remove");
      gamePlaying = false;
    }
  }
  nextPlayer();
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  console.log('points', points);
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "Игрок 1";
  document.getElementById("name-1").textContent = "Игрок 2";
  document.querySelector(".points").style.display = 'block';
  document.querySelector(".otpr").style.display = 'block';
}
