// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const expectHigh = 1;
    const expectLow = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 1);
    const high = compareNumbers(2, 1);
    const low = compareNumbers(0, 1);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(expectHigh, high);
    expect.equal(expectLow, low);
});
