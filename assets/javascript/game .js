$(document).ready(function() {
$("select, input").change(function () 
{
// setting up win loss counter
var wins = 0;
var losses = 0;
var totalScore = 0;

var target = Math.floor(Math.random()*119)+1;

$("#target-score").text(target);

$("wins").text(wins);
$("losses").text(losses);

$("gem").on("click", function(){
    totalScore += Math.floor(Math.random()*11)+1;

    if (totalScore === target) {
        wins++ ;
    }
    else if (totalScore >= target) {
        losses ++;
    }
})

})

});