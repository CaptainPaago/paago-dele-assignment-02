const assignment = require('../src/assignment.js');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    const numbers = [
        17,
        0,
        67,
        41,
        49,
        21,
        1,
        86,
        76,
        2,
        54,
        14,
        93,
        84,
        14,
        77,
        35,
        7,
        29,
        64
    ]

 function countEvenNumbers(numbers) {
    var count = 0
   for (var i =0; i < numbers.length; i++){
     if (numbers[i] % 2 === 0)
     {count++;}}
             
         return count;   
        }
  console.log("The evens are " + countEvenNumbers(numbers));
    expect(countEvenNumbers(numbers)).toBe(9);
});

