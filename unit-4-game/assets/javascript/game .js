// Note: JS file does not Work. Refer to the script in hmtl

$(document).ready(function() {
$("select, input").change(function () 
{

// setting up win loss counter
var wins = 0;
var losses = 0;
var totalScore = 0;

var gem1= Math.floor(Math.random()*11)+1;
var gem2= Math.floor(Math.random()*11)+1;
var gem3= Math.floor(Math.random()*11)+1;
var gem4= Math.floor(Math.random()*11)+1;

$("#numWins").text(wins);
$("#numLosses").text(losses);

var target = Math.floor(Math.random()*102)+18;

function reset(){
  totalScore = 0;
  target = Math.floor(Math.random()*102)+18;
  var gem1= Math.floor(Math.random()*11)+1;
  var gem2= Math.floor(Math.random()*11)+1;
  var gem3= Math.floor(Math.random()*11)+1;
  var gem4= Math.floor(Math.random()*11)+1;
}

$("#target-score").text(target);

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

$("#3").on("click", function(){
    totalScore = totalScore + gem1;
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

});
});