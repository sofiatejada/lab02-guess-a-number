// import functions and grab DOM elements
import { compareNumbers } from './utils.js';



//grab DOM elements with IDs

const userInput = document.getElementById('userInput');
const button = document.getElementById('button');
const wrongDisplay = document.getElementById('tries-remaining');
const result = document.getElementById('result');
const reset = document.getElementById('reset-button');
const section = document.getElementById('section');
const wins = document.getElementById('times-won');
const loses = document.getElementById('times-lost');
const playAgainButton = document.getElementById('play-again-button');
const timesPlayedDisplay = document.getElementById('times-played');


let correctNumber = Math.ceil(Math.random() * 20);
let score = 0;
let timesWon = 0;
let timesPlayed = 0;
let timesLost = 0; 
//set up an event listener

button.addEventListener('click', () => {
    //track the user inputs every time there's a click
    score = score + 1; 
    
    timesPlayed = score;
    timesPlayedDisplay.textContent = timesPlayed;
    
    // console.log(score, timesPlayed);
    // console.log(typeof score);
    //get the user input and store it in a variable
    const input = Number(userInput.value);
    //console.log(userInput.value);

    //console.log(compareNumbers);
    //console.log(correctNumber);




    //check the input against the random number

    if (compareNumbers(input, correctNumber) === 0) {
        result.textContent = `Well done! You won in ${score} tries!`;
        button.disabled = true;
        if (score === 1) {
            result.textContent = `Well done! You won in ${score} try!`;
            button.disabled = true;
        }

        //unhide it
        section.style.display = 'block';
        result.style.display = 'block';

        //set result back to zero
        score = 0;

        //generate a new number
        correctNumber = Math.ceil(Math.random() * 20);

        //tracking wins
        timesWon = timesWon + 1;
        
        //display times won
        wins.textContent = timesWon;
        
        //hide wrong display
        wrongDisplay.style.display = 'none';
    
    } else if (compareNumbers(input, correctNumber) === 1) {
        wrongDisplay.textContent = `Too high! Try again. You have ${5 - score} tries remaining`;
        
        //unhide it
        section.style.display = 'block';
        wrongDisplay.style.display = 'block';
        
        //display times won
        wins.textContent = timesWon;

        //hide winning message

        result.style.display = 'none';
    } else if (compareNumbers(input, correctNumber) === -1) {     
        wrongDisplay.textContent = `Too low! Try again. You have ${5 - score} tries remaining`;
        //display times won

        wins.textContent = timesWon;
        //unhide it

        section.style.display = 'block';


        wrongDisplay.style.display = 'block';
        //hide winning message

        result.style.display = 'none';
    }

    //lost the game reset

    if (score === 5) {
        //tracking loses
        

        timesLost++;
        //display times lost


        loses.textContent = timesLost;

        wrongDisplay.textContent = 'You lose! Try again.';
        //reset score to zero

        score = 0;
        //generate a new number

        correctNumber = Math.ceil(Math.random() * 20);
        //turn off button

        button.disabled = true;
    }
    
    //how many times player wins tracking


    
});

//reset button

reset.addEventListener('click', () => {
    //reset score to zero

    timesLost = 0;

    score = 0;
    //reset times won

    timesWon = 0;
    wins.textContent = timesWon;
    //reset times lost

    timesLost;
    loses.textContent = timesLost;
    //generate a new number

    correctNumber = Math.ceil(Math.random() * 20);
    //hide displays again

    section.style.display = 'none';
    //console.log(correctNumber);

    //button works again

    button.disabled = false;

});

//play again button

playAgainButton.addEventListener('click', () => {
    //reset score to zero
    
    score = 0;
    //generate a new number

    correctNumber = Math.ceil(Math.random() * 20);
    //hide displays again

    section.style.display = 'none';
    //console.log(correctNumber);

    //button works again

    button.disabled = false;

});