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

let correctNumber = Math.ceil(Math.random() * 20);
let score = 0;
let timesWon = 0;

//set up an event listener

button.addEventListener('click', () => {
    //track the user inputs every time there's a click
    score = score + 1;

    
    //get the user input and store it in a variable
    const input = Number(userInput.value);
    console.log(userInput.value);

    console.log(compareNumbers);
    console.log(correctNumber);




    //check the input against the random number

    if (compareNumbers(input, correctNumber) === 0) {
        result.textContent = `Well done! You won in ${score} tries!`;
        if (score === 1) {
            result.textContent = `Well done! You won in ${score} try!`;
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
        wrongDisplay.textContent = 'You lose! Try again.';
        //reset score to zero
        score = 0;
        //generate a new number
        correctNumber = Math.ceil(Math.random() * 20);
    }
    
    //how many times player wins tracking


    
});

//reset button

reset.addEventListener('click', () => {
    //reset score to zero
    score = 0;
    //reset times won
    timesWon = 0;
    wins.textContent = timesWon;
    //generate a new number
    correctNumber = Math.ceil(Math.random() * 20);
    //hide displays again
    section.style.display = 'none';
    console.log(correctNumber);
});