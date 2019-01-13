var gameRunning = false
var startNumber 
var wins = 0
var loses = 0

var minNumber = 12
var maxNumber = 120

var $randomNumber = startNumber



var crystalMin = 1
var crystalMax = 12



// assign styarting number

function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }   

console.log($randomNumber);

$("#game-start").on("click", gameStart);


function gameStart(){
    if (!gameRunning){
     gameRunning = true
     $randomNumber = randomNumberFromRange(minNumber, maxNumber);
    var numberOne = 1 + Math.floor(Math.random() * 13)+1;
    var numberTwo = 1 + Math.floor(Math.random() * 13)+1;
    var numberThree = 1 + Math.floor(Math.random() * 13)+1;
    var numberFour = 1 + Math.floor(Math.random() * 13)+1;
    $("#tarot1").text(numberOne);
    $("#tarot2").text(numberTwo);
    $("#tarot3").text(numberThree);
    $("#tarot4").text(numberFour);
    $("#score").text($randomNumber);

    }


    

}



// changes the value assigned to the cards every 10 seconds


// hard mode
// setInterval(function() {
//     var numberOne = 1 + Math.floor(Math.random() * 13)+1;
//     var numberTwo = 1 + Math.floor(Math.random() * 13)+1;
//     var numberThree = 1 + Math.floor(Math.random() * 13)+1;
//     var numberFour = 1 + Math.floor(Math.random() * 13)+1;
//     $('#tarot1').text(numberOne);
//     $('#tarot2').text(numberTwo);
//     $('#tarot3').text(numberThree);
//     $('#tarot4').text(numberFour);
//   },
//   3000);

$("#tarot1").on("click", applyScore) 
$("#tarot2").on("click", applyScore)
$("#tarot3").on("click", applyScore)
$("#tarot4").on("click", applyScore)

function applyScore(){
    if( gameRunning = true){
     

    $("#score").text(startNumber);


    if ( startNumber = 120){
        alert.text("You win!");
        wins++;
        gameRunning = false
    }
    if ( startNumber > 120) {
        alert.text("You Lose!");
        loses++;
        gameRunning = false
    }
   } 
}


