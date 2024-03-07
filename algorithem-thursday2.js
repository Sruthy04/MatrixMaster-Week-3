//Sum all numbers in a range.

//define a function with array as a parameter.
//define a variable to hold the sum of the array.
//for loop staring from the min number in the array and end at the max number .
//add the number on each iteration to the sum variable.
//return the sum after the loop ends.




function sumBetweenNumbers(arr) {
    let [num1, num2] = arr;
    let sum = 0;

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        sum += i;
    }

    return sum;
}

const inputArray = [5, 10];
const result = sumBetweenNumbers(inputArray);
console.log(`Sum of numbers between ${inputArray[0]} and ${inputArray[1]}: ${result}`);
