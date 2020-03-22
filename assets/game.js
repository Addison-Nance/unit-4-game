var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var goal = 0;
var score = 0;
var wins = 0;
var loss = 0;

$(document).ready(function() {
  goal = Math.floor(Math.random() * 50 + 20);
  // console.log(goal)
  $("#goalbox").text("Goal: " + goal);
  $("#scorebox").text("Score: " + score);
  gem1 = Math.floor(Math.random() * 15 + 1);
  gem2 = Math.floor(Math.random() * 15 + 1);
  gem3 = Math.floor(Math.random() * 15 + 1);
  gem4 = Math.floor(Math.random() * 15 + 1);
  console.log(gem1);
  console.log(gem2);
  console.log(gem3);
  console.log(gem4);

  $("#gem1").on("click", function() {
    score += gem1;
    console.log(score);
    $("#scorebox").text("Wins: " + score);

    if (score > goal) {
      console.log("loser");
      loss++;
      $("#losebox").text("Losses: " + loss);
      gameReset();
    } else if (score === goal) {
      console.log("winner");
      wins++;
      $("#winbox").text("Wins: " + wins);
      gameReset();
    } else {
    }
  });

  $("#gem2").on("click", function() {
    score += gem2;
    console.log(score);
    $("#scorebox").text("Score: " + score);

    if (score > goal) {
      console.log("loser");
      loss++;
      gameReset();
      $("#losebox").text("Losses: " + loss);
    } else if (score === goal) {
      console.log("winner");
      wins++;
      $("#winbox").text("Wins: " + wins);
      gameReset();
    } else {
    }
  });

  $("#gem3").on("click", function() {
    score += gem3;
    console.log(score);
    $("#scorebox").text("Score: " + score);

    if (score > goal) {
      console.log("loser");
      loss++;
      $("#losebox").text("Losses: " + loss);
      gameReset();
    } else if (score === goal) {
      console.log("winner");
      wins++;
      $("#winbox").text("wins: " + wins);
      gameReset();
    } else {
    }
  });

  $("#gem4").on("click", function() {
    score += gem4;
    console.log(score);
    $("#scorebox").text("Score: " + score);

    if (score > goal) {
      console.log("loser");
      loss++;
      $("#losebox").text("Losses: " + loss);
      gameReset();
    } else if (score === goal) {
      console.log("winner");
      wins++;
      $("#winbox").text("Wins:" + wins);
      gameReset();
    } else {
    }
  });
});
function gameReset() {
  score = 0;
  $("#scorebox").text("Score: " + score);
  goal = Math.floor(Math.random() * 50 + 20);
  $("#goalbox").text("Goal: "+goal);
  gem1 = Math.floor(Math.random() * 15 + 1);
  gem2 = Math.floor(Math.random() * 15 + 1);
  gem3 = Math.floor(Math.random() * 15 + 1);
  gem4 = Math.floor(Math.random() * 15 + 1);
  console.log(gem1);
  console.log(gem2);
  console.log(gem3);
  console.log(gem4);
}
