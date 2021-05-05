// import functions and grab DOM elements
import { compareNumbers } from './utils.js';



//grab DOM elements with IDs

const userInput = document.getElementById('userInput');
const button = document.getElementById('button');
const wrongDisplay = document.getElementById('tries-remaining');
const result = document.getElementById('result');
const reset = document.getElementById('reset-button');
const section = document.getElementById('section');

let correctNumber = Math.ceil(Math.random() * 20);
let score = 0;

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
        result.textContent = `Well done! You're right! You have ${5 - score} tries remaining`;
        //unhide it
        section.style.display = 'block';
        //set result back to zero
        score = 0;
        //generate a new number
        correctNumber = Math.ceil(Math.random() * 20);
    } else if (compareNumbers(input, correctNumber) === 1) {
        wrongDisplay.textContent = `Too high! Try again. You have ${5 - score} tries remaining`;
        //unhide it
        section.style.display = 'block';
    } else if (compareNumbers(input, correctNumber) === -1) {     
        wrongDisplay.textContent = `Too low! Try again. You have ${5 - score} tries remaining`;
        //unhide it
        section.style.display = 'block';
    }

    //lost the game reset

    if (score === 5) {
        wrongDisplay.textContent = 'You lose! Try again.';
        //reset score to zero
        score = 0;
        //generate a new number
        correctNumber = Math.ceil(Math.random() * 20);
    }
    

    
});

//reset button

reset.addEventListener('click', () => {
    //reset score to zero
    score = 0;
    //generate a new number
    correctNumber = Math.ceil(Math.random() * 20);
    //hide displays again
    section.style.display = 'none';
});