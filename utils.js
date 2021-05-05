export function compareNumbers(guess) {
    const correctNumber = Math.ceil(Math.random() * 20);
    if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } 
    return -1;
}