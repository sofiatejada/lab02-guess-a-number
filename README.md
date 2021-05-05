## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# Guess a Game Plan

### HTML
1) Write HTML framework for game
    - what do we need to be in the HTML?
    - header/title
    - paragraph explaining rules to the user
    - an input of type number where the user puts in a number
    - a button where the user checks if the number they guessed is right
    - a place where the user sees how many tries they have left
    - a place where user sees if guess was too high or too low
    - a place to put feedback on wether they won or lost
2) Write IDs for:
    - user input
    - button
    - tries left span
    - too high or too low span
    - results span


### JAVASCRIPT
1) Grab DOM elements with IDs
2) How do we get input from the user:
    - event listener on the button
3) We want the user to be able to put a number in and evaluate if that number is too low or too high
    - HOW?
    - have the computer create a random number
    - store their input in a variable?
    - store the random number in a variable?
    - check the input against the random number
4) We want the user to know if their input was too high or too low
    - HOW?
    - compare the input against the random number and send out a message relaying too high or too low
5) We want the user to know how many tries they have left
    - HOW?
    - google a way to break out of the function and return a 'you lost' message
6) We want the user to know if they won or lost
    - HOW?
    - set rules that if the input equals the random number, return a 'you won' message
