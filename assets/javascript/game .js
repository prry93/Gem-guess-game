// setting up win loss and user total score counter at 0
var wins = 0;
var losses = 0;
var totalScore = 0;
var targetScore = 0;

// generates the random value for the clickable crystal
// var gem1= Math.floor(Math.random()*11)+1;

function gemValue(gem) {
    gem = Math.floor(Math.random()*11)+1;
    return gem
}

var gem1 = gemValue(gem1);
var gem2 = gemValue(gem2);
var gem3 = gemValue(gem3);
var gem4 = gemValue(gem4);

// Counts wins and losses
$("#numWins").text(wins);
$("#numLosses").text(losses);

// will generate the random number that you are trying achieve
var targetScore = Math.floor(Math.random()*102)+18;

function newTargetScore(){
    return targetScoreScore = Math.floor(Math.random()*102)+18;
}

newTargetScore(targetScore);

// will reset game by setting the total user score to 0 and give new number values
function reset(){
  totalScore = 0;
  targetScore = newTargetScore(targetScore);
  console.log(targetScore);
   gem1= gemValue(gem1);
   gem2= gemValue(gem1);
   gem3= gemValue(gem1);;
   gem4= gemValue(gem1);
  $("#numWins").text(wins);
  $("#numLosses").text(losses);
  $("#target-score").text(targetScore);
  $("#total-score").text(totalScore);
}

// will display the score generated from targetScore
$("#target-score").text(targetScore);

// give click functionality and add to the total score

// Note: wins and losses counter do not work

$("#1").on("click", function(){
    totalScore = totalScore + gem1;
  $("#total-score").text(totalScore);
    if (totalScore === targetScore) {
        wins++ ;
        reset();
    }
    else if (totalScore > targetScore) {
        losses ++;
        reset();
    }
});



$("#2").on("click", function(){
    totalScore = totalScore + gem2;
  $("#total-score").text(totalScore);
    if (totalScore === targetScore) {
        wins++ ;
        reset();
    }
    else if (totalScore > targetScore) {
        losses ++;
        reset();
    }
})

$("#3").on("click", function(){
    totalScore = totalScore + gem3;
  $("#total-score").text(totalScore);
    if (totalScore === targetScore) {
        wins++ ;
        reset();
    }
    else if (totalScore > targetScore) {
        losses ++;   
    }

})

$("#4").on("click", function(){
    totalScore = totalScore + gem4;
  $("#total-score").text(totalScore);
    if (totalScore === targetScore) {
        wins++ ;
        reset();
    }
    else if (totalScore > targetScore) {
        losses ++;
        reset();
    }
})