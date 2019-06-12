// ***************************** Set-up *******************************
// assigns starting values and lists them to the html page when first loaded

// Global Variables

var wins = 0;
var losses = 0;
var userScore = 0;
var targetScore = 0;

// query selector to update the html with the current scores
document.querySelector("#user-score").innerHTML = userScore;
document.querySelector("#numWins").innerHTML = wins;
document.querySelector("#numLosses").innerHTML = losses;

// assigns each html gem to a variable which will later be used to assign it an on-click event listener
var gem1 = document.querySelector("#gem1");
var gem2 = document.querySelector("#gem2");
var gem3 = document.querySelector("#gem3");
var gem4 = document.querySelector("#gem4");
var gem5 = document.querySelector("#gem5");
var gem6 = document.querySelector("#gem6");
var gem7 = document.querySelector("#gem7");
var gem8 = document.querySelector("#gem8");
var gem9 = document.querySelector("#gem9");


// A function that can be reused to assign each gem with a random value
function gemValue() {
    var gem = Math.floor(Math.random()*10)+1;
    return gem;
};

// gem(i)Value will be given the value assigned from the function 
var gem1Value = gemValue();
var gem2Value = gemValue();
var gem3Value = gemValue();
var gem4Value = gemValue();
var gem5Value = gemValue();
var gem6Value = gemValue();
var gem7Value = gemValue();
var gem8Value = gemValue();
var gem9Value = gemValue();

// ************************* Gameplay ***************************************

// will generate the random number that you are trying achieve
var targetScore = Math.floor(Math.random()*120)+10;
document.querySelector("#target-score").innerHTML = targetScore;

// The primary function that runs to determine a win/loss.
// takes the value of a gem (assigned earlier) and adds it to the value userScore, which is the total of all values you have clicked on.
function gameLogic(gem) {
    userScore += gem;
    document.querySelector("#user-score").innerHTML = userScore;   
      if (userScore === targetScore) {
          wins++ ;
          alert("You won!");
          reset();
      }
      else if (userScore > targetScore) {
          losses ++;
          alert("You lost!");
          reset();
      }
    //   if the 'if' or 'else if' statements run, a win/loss will be assigned and then the reset function will be called, which restarts the game
};

// Each gem variable is assigned to an html element is given an on-click event listener which will run the function listed above
gem1.addEventListener("click", function(){
    gameLogic(gem1Value);
});
gem2.addEventListener("click", function(){
    gameLogic(gem2Value);
});
gem3.addEventListener("click", function(){
    gameLogic(gem3Value);
});
gem4.addEventListener("click", function(){
    gameLogic(gem4Value);
});
gem5.addEventListener("click", function(){
    gameLogic(gem5Value);
});
gem6.addEventListener("click", function(){
    gameLogic(gem6Value);
});
gem7.addEventListener("click", function(){
    gameLogic(gem7Value);
});
gem8.addEventListener("click", function(){
    gameLogic(gem8Value);
});
gem9.addEventListener("click", function(){
    gameLogic(gem9Value);
});

// Note: can possibly DRY code by using forEach(?) to not repeat addevent listener each time.

// ********************************* End of Game ****************************************

// After a win or loss, user's score is reset, the random values are given new values, and the html page is updated with the new scores.
function reset(){
    userScore = 0;
    targetScore = Math.floor(Math.random()*102)+18;
     gem1Value= gemValue();
     gem2Value= gemValue();
     gem3Value= gemValue();
     gem4Value= gemValue();
     gem5Value= gemValue();
     gem6Value= gemValue();
     gem7Value= gemValue();
     gem8Value= gemValue();
     gem9Value= gemValue();
     document.querySelector("#numWins").innerHTML = wins
     document.querySelector("#numLosses").innerHTML = losses;
     document.querySelector("#target-score").innerHTML = targetScore;
    document.querySelector("#user-score").innerHTML = userScore;
  }