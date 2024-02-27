//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
 
 //define a variable hold the result of sum.
 // for loop starts from 200 and end at 2700.
 // check the condition if number is divisible by 3 or 5.But not divisible by both 30and 5.
 //add the numbers
 // print the sum

 let sum=0
  for(let i=0;i<=2700;i++){
    if((i%3==0 || i%5==0) && !(i%3==0 && i%5 ==0)){
        sum+=i
    }
 }
 console.log (sum);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. 

  //define an empty array.
  //for loop iterate through the array.
  //add  each element to newArray after shifting.
  //print out the new Array

  let newArray=[]
  let x=[2,1,6,4,-7]
   for(let i=0;i<x.length;i++) {
    newArray.unshift(x[i])
   }
   console.log(newArray)

// 3. FizzBuzz

//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]  

  //define an empty array
  //for loop iterate through the range of 1 to 135.
  //check the if condition that if number is divisible by 3 and 5.
  // if true replace the number by "FizzBuzz".If false then check whether it's divisible by 3.
  //if  yes replace with "Fizz" else If no check the number divisible by 5.
  //If true replace with "Buzz",else just push the number into the array.
  // print the new array.

  let newArray=[]
  for(let i=1;i<=135;i++){
    if(i % 3 === 0 && i % 5 === 0){
      newArray.push('FizzBuzz') 
    }else if(i % 3===0 ){   
        newArray.push("Fizz")
        }else if(i % 5===0 ) {        
          newArray.push("Buzz")      
     }else{
       newArray.push(i)
     }
  }
  console.log(newArray) 

// 4. Fibonacci

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.  
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.  
//0 1 1 2 3 5 8 13 21...  

 //define an empty array.
 //for loop starting at 0 and 1 iterating till less than 1,000,000.
 //Inside the loop calculate the sum of previous two numbers and push in the array.
 //Print the new with elements the array.  

  let fib=[]
  for(i=0;i<100;i++){
    if (i==0 || i ==1) {
      fib[i]=i
    }else{
      fib[i]=fib[i-1]+fib[i-2]
    } 
  }
  console.log(fib) 

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

 //for loop iterate through the array.
 //if statement to check if element is negative.
 //If it is remove from array using splice method.
 //print  out the array after removing negatives.
 

  const arr = [1,-2,4,1];
  for (let i=0 ; i <arr.length; i++ ){
    if (arr[i]<0){
      arr.splice(i,1)
      i=i-1
    }
  }
  console.log(arr);
 
//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
 
  //define an empty array of string.
  //for loop generate according with star given.
  //for loop iterate  over each word in string .
  //if condition to check the star given word.
  //if true replace the word with stars.

  let x=['Man', 'I','Love','The','Matrix','Program']
  let word="Matrix"
  let str="" 
  for(i=0;i<x.length;i++){
    str+="*"
  }
  for(i=0; i<word.length;i++) {
   if(word==x[i]){
    x[i]=str
   }
  }
  console.log(x)
