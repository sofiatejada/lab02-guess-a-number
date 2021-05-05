// import functions and grab DOM elements
import { compareNumbers } from './utils.js';



//grab DOM elements with IDs

const userInput = document.getElementById('userInput');
const button = document.getElementById('button');
const wrongDisplay = document.getElementById('tries-remaining');
const result = document.getElementById('result');



//set up an event listener

button.addEventListener('click', () => {

    //get the user input and store it in a variable
    const input = userInput.value;
    console.log(userInput.value);

    console.log(compareNumbers);


    //check the input against the random number

    if (compareNumbers(input) === 0) {
        result.textContent = 'Well done! You\'re right!';
    } else if (compareNumbers(input) === 1) {
        wrongDisplay.textContent = 'Too high! Try again.';
    } else if (compareNumbers(input) === -1) {
        wrongDisplay.textContent = 'Too low! Try again.';
    }

});