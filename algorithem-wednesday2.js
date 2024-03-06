// Title case a SENTENCE.

//define a function take with parameter string.
//define variable words to hold the string after changing it to array.
//for loop iterate over each element .
//make changes to each array element using string methods on each element.
//transform the array to string.
//return the string.


function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return words.join(' ');
}
const sentence = "Short And Stout";
const result = capitalizeWords(sentence);
console.log(result);