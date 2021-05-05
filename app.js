// import functions and grab DOM elements
import { compareNumbers } from './utils.js';



//grab DOM elements with IDs

const userInput = document.getElementById('userInput');
const button = document.getElementById('button');
const wrongDisplay = document.getElementById('tries-remaining');
const result = document.getElementById('result');

const correctNumber = Math.ceil(Math.random() * 20);
let score = 0;

//set up an event listener

button.addEventListener('click', () => {
    //track the user inputs
    score = score + 1;

    
    //get the user input and store it in a variable
    const input = Number(userInput.value);
    console.log(userInput.value);

    console.log(compareNumbers);
    console.log(correctNumber);




    //check the input against the random number

    if (compareNumbers(input, correctNumber) === 0) {
        result.textContent = `Well done! You're right! You have clicked ${score} times`;
    } else if (compareNumbers(input, correctNumber) === 1) {
        
        wrongDisplay.textContent = `Too high! Try again. You have clicked ${score} times`;
    } else if (compareNumbers(input, correctNumber) === -1) {
        
        wrongDisplay.textContent = `Too low! Try again. You have clicked ${score} times`;
    }

    
    

    
});
