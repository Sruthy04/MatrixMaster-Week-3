// 1.
let user1= {
    name: "John",
    years: 30
};
  const { name, years: age, isAdmin=false }=user1;

  console.log(name); 
  console.log(age); 
  console.log(isAdmin);

//2.
  
   const planet="Earth";
   const currentVisitor="john";

//3. 

//Result of the call is "Hello, John" Why because here the variable phrase with value "Hello",then comes to 'if' if its true ,displays an alert message with the combination of variable"phrase" and "user" in the function 'sayHi'. 

//4.
 
 const user={};// empty object

 user.name="John";//property name with value John

 user.surname="Smith";//property surname  with value Smith

 user.name="Pete";//change the property name to Pete

 delete user.name;//remove the property name from the object.

//5.

//In this case it is possible change the property value of the constant.
// But It's not a good practice as anything declared with constant keyword cannot be reassigned.

//6. 
 
const salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};
let sum = 0;
for (const salary of Object.values(salaries)) {
  sum += salary;
  }
  if (Object.keys(salaries).length === 0) {
    sum = 0;
  }
  
  console.log(`The sum of salaries is: ${sum}`);

//7.

result = (a + b < 4) ? 'Below' : 'Over';

//8.

const message = login === 'Employee'
  ? 'Hello'
  : login === 'Director'
  ? 'Greetings'
  : login === ''
  ? 'No login'
  : '';
console.log(message);
