// setting up win loss and user total score counter at 0
var wins = 0;
var losses = 0;
var totalScore = 0;

// generates the random value for the clickable crystal
var gem1= Math.floor(Math.random()*11)+1;
var gem2= Math.floor(Math.random()*11)+1;
var gem3= Math.floor(Math.random()*11)+1;
var gem4= Math.floor(Math.random()*11)+1;

// Counts wins and losses
$("#numWins").text(wins);
$("#numLosses").text(losses);

// will generate the random number that you are trying achieve
var target = Math.floor(Math.random()*102)+18;

// will reset game by setting the total user score to 0 and give new number values
function reset(){
  totalScore = 0;
  target = Math.floor(Math.random()*102)+18;
  var gem1= Math.floor(Math.random()*11)+1;
  var gem2= Math.floor(Math.random()*11)+1;
  var gem3= Math.floor(Math.random()*11)+1;
  var gem4= Math.floor(Math.random()*11)+1;
  $("#numWins").text(wins);
  $("#numLosses").text(losses);
  $("#target-score").text(target);
}

// will display the score generated from target
$("#target-score").text(target);

// give click functionality and add to the total score

// Note: wins and losses counter do not work

$("#1").on("click", function(){
    totalScore = totalScore + gem1;
  $("#total-score").text(totalScore);
    if (totalScore === target) {
        wins++ ;
        reset();
    }
    else if (totalScore > target) {
        losses ++;
        reset();
    }
})

$("#2").on("click", function(){
    totalScore = totalScore + gem2;
  $("#total-score").text(totalScore);
    if (totalScore === target) {
        wins++ ;
        reset();
    }
    else if (totalScore > target) {
        losses ++;
        reset();
    }
})

$("#3").on("click", function(){
    totalScore = totalScore + gem3;
  $("#total-score").text(totalScore);
    if (totalScore === target) {
        wins++ ;
        reset();
    }
    else if (totalScore > target) {
        losses ++;   
    }

})

$("#4").on("click", function(){
    totalScore = totalScore + gem4;
  $("#total-score").text(totalScore);
    if (totalScore === target) {
        wins++ ;
        reset();
    }
    else if (totalScore > target) {
        losses ++;
        reset();
    }
})