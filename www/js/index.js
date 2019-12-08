"use strict";

const startButton = document.getElementById("Start");
const readyScreen = document.getElementById("deviceready");
const gameScreen = document.getElementById("gameScreen");
const userEnter = document.getElementById("userGuessInput");

var guesses = 0;
var correctAnswer = 0;
var gameWin = 0;
var newNum = 0;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}

startButton.addEventListener("click", function(start){
    
    console.log("user clicked start");
    startButton.className = "hidden";
    gameScreen.className = "";
    
    this.randomNumber = Math.floor(Math.random() * 100);
        console.log(this.randomNumber);
    correctAnswer = this.randomNumber;
});

userEnter.addEventListener("click", function(getInput)
{
   
    var userinput= document.getElementById("userGuess").value;
    var userGuess = userinput;
    console.log(userGuess);
    if (correctAnswer == userGuess){
        guesses++
        return alert("you have won in " + guesses +" guesses");
        navigator.vibrate([100,100,100,100]);
    }
    else if (correctAnswer > userGuess && userGuess >=0 ){ 
        guesses++;
        return alert("your guess is too low");
        navigator.vibrate([1000,250,1000]);
    }
    else if (correctAnswer < userGuess && userGuess <= 100){
        guesses++;
        return alert ("your guess is too high");
        navigator.vibrate([1000,250,1000]);}
    else if (userGuess > 100){
        return alert("please enter a valid number");
        g
    }
    else if (userGuess < 0){
        return alert("please enter a valid number");
        
    }
    else {
        return alert("please enter a valid number");
       
    }
    
    
});





     

