//Find the longest word in the string.

//function takes the string as a parameter.
//define a variable to hold the converted string to array.
//define a variable to hold  max length of the word .
//for loop iterate  over each element in the array and if condition check the word length.
//is the condition is true  then assign that value to the variable which holds the maximum length.
//return the result after the loop ends.

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));