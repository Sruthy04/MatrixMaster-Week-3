//1. Factorial! 

function factorialize(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
   }
     console.log(factorialize(5)); 