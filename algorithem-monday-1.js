// 1.Print 1 - 135
//Write a program using JavaScript that will print all the numbers from 1 to 135.

  //for loop starts from 1 and end at 135.
  //print numbers.

  for(let i=1;i<=135;i++) {
    console.log(i);
  }

//2. Print Odd Numbers 1 - 135
//Write a program using JavaScript that will print all the odd numbers from 1 to 135.

 //for loop starts from 1 and end at 135.
 //condition:determine the number is odd or not.
 //if it's odd then print the number.

 for(let i = 1;i<=135;i++){
  if(i%2!==0){
    console.log(i)
  }
 }

//3. Sum of Printed Numbers
//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this: 

  //for loop starts from 1 and end at 135.
  //the variable holds the sum of the printed numbers.
  //print the numbers and sum.

   let sum=0
  for(let i = 1;i<=135;i++){
    sum=sum+i
    console.log(`Number:${i} Sum:${sum}`)
  }


//4. Print the elements of an array
//Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

  //define an array of elements.
  //use a for each loop to print the elements.
  
  let X = [1,4,2,12]
  for(i=0;i<X.length;i++){
    console.log(X[i])
  } 

  //5. Find Max
  //Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.  
    
      //define a variable to show the max value.
      //if condition to check the array element greater than the max value.
      //print max value

   function findMax(X) {
    let max_value = X[0];
    for(let i = 0; i < X.length; i++) {
        if(X[i] > max_value) {
            max_value = X[i];
        }
    }
    return max_value;
  }
    let X = [2, -3, -1];
    console.log(findMax(X));
   
//6. Get Average
//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

   //define a variable
  //for loop that adds all values in the array
  //find the sum.
  //find the average and print.


  function calculateAverage(X) {
    let total = 0;
    for(let i = 0; i < X.length; i++) {
      total = total+X[i];
    }
  return total / X.length;
  }

  let X = [2, 1, 3];
  console.log(calculateAverage(X)); 


//7. Eliminate the Negatives
//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be

   //for loop to iterate the array elements.
   //condition  to check if element is negative or not.
   //if it's positive push into 0.
   //print the array.
   
   function NegativesWithZero(X) {
    for(let i = 0; i < X.length; i++) {
        if(X[i] < 0) {
            X[i] = 0;
        }
    }
    return X;
  }
  let X = [2, -1, 4, -3];
  console.log(NegativesWithZero(X));  

//8. Number to String
//Write a program that takes an array of numbers and turns the negative values into strings.
//For example,
// For array 
const x= [1,-4,0,-1]  
// The output should be [1,'Turing,0,'Turing'].  

  //for loop to iterate through each element in the array.
  //if condition to check the element is negative.
  //if the condition is true convert the element to "turning".
  // else keep the number as it is.

  function NegativesWithString(X) {
    for(let i = 0; i < X.length; i++) {
        if(X[i] < 0) {
            X[i] = 'turing';
        }
    }
    return X;
  }
  let X = [1, -4, 0, -1];
  console.log(NegativesWithString(X));  

