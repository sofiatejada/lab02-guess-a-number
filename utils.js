export function compareNumbers(guess, correctNumber) {
    
    if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } 
    return -1;
}