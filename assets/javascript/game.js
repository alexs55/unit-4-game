
var wins = 0
var loses = 0



var minNumber = 12
var maxNumber = 120



var $randomNumber;


var previousResult = 0
var score = 0









// assign starting number
var startGame = function(){
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$randomNumber = randomNumberFromRange(minNumber, maxNumber);

$("#score").text($randomNumber);
// reset the value
previousResult = 0;

$(".crystals").empty();
// assigning images
var images = [
    'https://github.com/alexs55/unit-4-game/blob/master/assets/images/IMG_0213.jpg?raw=true',
    'https://github.com/alexs55/unit-4-game/blob/master/assets/images/IMG_0214.jpg?raw=true',
    'https://github.com/alexs55/unit-4-game/blob/master/assets/images/IMG_0215.jpg?raw=true',
    'https://github.com/alexs55/unit-4-game/blob/master/assets/images/IMG_0216.jpg?raw=true'

];

// divs for cystals and giving secret number
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<div>")
    // object assigned
    crystal.attr({
        "class": 'crystal',
        "data-random": random,
        
    });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        })
    $(".crystals").append(crystal);
}
}
// runs the game once the document loads
startGame();



 


$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    previousResult += num;
// making sure variables where assigned properly
//    console.log(previousResult);

//    score = previousResult + $randomNumber testing for a specific number

//    console.log(score)

   $("#current-score").text(previousResult);

    
    // score change
    var score = parseInt($randomNumber)

    if(previousResult > score){
        alert("you lost!!");
        loses++;
        $("#loses").text(loses);
        startGame();
        
       

    }

    else if(previousResult === score){
        alert("you win!!");
        wins++;
        $("#wins").text(wins);
        startGame();
        
        
        
    }

});



   













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





