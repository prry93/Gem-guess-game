// setting up win loss and user total score counter at 0
var wins = 0;
var losses = 0;
var totalScore = 0;
var targetScore = 0;

document.querySelector("#total-score").innerHTML = totalScore;

document.querySelector("#numWins").innerHTML = wins;
document.querySelector("#numLosses").innerHTML = wins;

var gem1 = document.querySelector("#gem1");
console.log(gem1);
var gem2 = document.querySelector("#gem2");
var gem3 = document.querySelector("#gem3");
var gem4 = document.querySelector("#gem4");

// generates the random value for the clickable crystal
// var gem1= Math.floor(Math.random()*11)+1;

function gemValue(gem) {
    var gem = Math.floor(Math.random()*6)+1;
    return gem
}

var gem1Value = gemValue(gem1Value);
console.log(gem1Value);
var gem2Value = gemValue(gem2Value);
console.log(gem2Value);
var gem3Value = gemValue(gem3Value);
console.log(gem3Value);
var gem4Value = gemValue(gem4Value);
console.log(gem4Value);

// will generate the random number that you are trying achieve
var targetScore = Math.floor(Math.random()*102)+18;
document.querySelector("#target-score").innerHTML = targetScore;
console.log(targetScore);


function gameLogic(gem) {
    totalScore += gem;
    $("#total-score").text(totalScore);
    
      if (totalScore === targetScore) {
          wins++ ;
          reset();
      }
      else if (totalScore > targetScore) {
          losses ++;
          reset();
      }
}

gem1.addEventListener("click", function(){
    gameLogic(gem1Value);
})

gem2.addEventListener("click", function(){
    gameLogic(gem2Value);
})

gem3.addEventListener("click", function(){
    gameLogic(gem3Value);
})

gem4.addEventListener("click", function(){
    gameLogic(gem4Value);
})

// will reset game by setting the total user score to 0 and give new number values
function reset(){
    totalScore = 0;
    targetScore = Math.floor(Math.random()*102)+18;
    console.log(targetScore);
     gem1Value= gemValue(gem1Value);
     gem2Value= gemValue(gem2Value);
     gem3Value= gemValue(gem3Value);;
     gem4Value= gemValue(gem4Value);
     document.querySelector("#numWins").innerHTML = wins
     console.log(wins);
     document.querySelector("#numLosses").innerHTML = losses;
     console.log(losses);
    $("#target-score").text(targetScore);
    document.querySelector("#total-score").innerHTML = totalScore;
  }