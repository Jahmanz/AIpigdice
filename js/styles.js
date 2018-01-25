
function randomNumber () {
  return (Math.floor(6*Math.random())+1);
}


var player1totalScore = [0,0]; //totalScore[0] = (whatever you player 1 score to be)
var player1roundScore = 0;

var player2totalScore = [0,0]; //totalScore[0] = (whatever you player 1 score to be)
var player2roundScore = 0;


$(document).ready(function() {
  $("button#player1").click(function() {
    var newRand = randomNumber();
    player1roundScore += newRand;
    $("#player1Roll").text(newRand);
    $("#player1Score").text(player1roundScore);

    if (player1roundScore === 100) {
      alert("You Win!")
    }
  });

  $("button#player2").click(function() {
    var newRand = randomNumber();
    player2roundScore += newRand;
    $("#player2Roll").text(newRand);
    $("#player2Score").text(player2roundScore);

    if (player2roundScore === 100) {
      alert("You Win!")
    }
  });

});
