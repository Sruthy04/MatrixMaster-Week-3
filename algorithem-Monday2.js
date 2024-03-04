//To Find Largest number in Arrays.

//define a function  to find the largest number given in the input parameter arr.
// initialize empty array to hold the largest numbers.Assuming this array holds the final result.
//for loop iterate through the main array and assume that  first element is the largest one in every sub arrays.
//for loop iterate through  each element of sub array and compare it with the largest number, if it is greater then update the largest.
//return the largest numbers.

function largestOfFour(arr) {
    let largestNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNum = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNum) {
          largestNum = arr[i][j];
        }
      }
      largestNumbers.push(largestNum);
    }
  
    return largestNumbers;
  }
  console.log(
    largestOfFour([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
    ])
  );