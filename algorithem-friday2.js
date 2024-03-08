// Fibonacci Sequence

//define 3 variable and set one variable with value 1.
//for loop start from the second number (variable i = 2) to the given number.
//shift the values to the variable.
//return the result.

function fibonacci(num){
    let seq = 1;
    let seq1 = 0;
    let seq2 = 0;

    for (let i = 2; i <= num; i++) {
        seq2= seq1
        seq1= seq
        seq  = seq1 + seq2
    }
return seq
}
console.log(fibonacci(7));