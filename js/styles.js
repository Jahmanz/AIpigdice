
var randomNumber = Math.floor(Math.random() * 6);

function randomWholeNum() {

  return Math.random();
}

$(document).ready(function() {
  $("button#player1").click(function() {
    $("ul").prepend(randomNumber);
  });





  $("button#player2").click(function() {
    event.preventDefault();
    $("ul").prepend(randomNumber);
  });

});
