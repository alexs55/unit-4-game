var gameRunning = false
var wins = 0
var loses = 0



var minNumber = 12
var maxNumber = 120



var $randomNumber;


var previousResult = 0








// assign styarting number

function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log($randomNumber);

$("#game-start").on("click", gameStart);


function gameStart(){
    if (!gameRunning) {
        gameRunning = true
        $randomNumber = randomNumberFromRange(minNumber, maxNumber);
        
        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 11) + 1;
            var crystal = $("<div>")
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            $(".crystals").append(crystal);
        }

      



    }
   
        $("#crystal").on('click', function () {

            var product = parseInt($("#crystal").attr('data-random'));

            previousResult += product;
            

            if((previousResult += $randomNumber) > 120){
                alert("you lost!!");
                loses++;
                gameRunning = false

            }

            else if ((previousResult += $randomNumber) === 120){
                alert("you win!!");
                wins++;
                gameRunning = false
            }

        });
        

    
    
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








    // function checkScore() {

    //     if (result === 120) {
    //         alert("You win!");
    //         wins++;
    //         gameRunning = false
    //     }
    //     if (result > 120) {
    //         alert("You Lose!");
    //         loses++;
    //         gameRunning = false
    //     }
    // }
