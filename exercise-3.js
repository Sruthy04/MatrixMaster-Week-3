//1.

const checkAge = (age) =>
  age > 18
    ? "You can access this page"
    : "Do you have permission to access this page ?";
let confirmationMessage = checkAge(5);
console.log(confirmationMessage);

//2.

const pow = (x, n) => {
  if (n < 1) {
    return "Please provide a natural number (integer >= 1) for n.";
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};
console.log("The multiplication is:", pow(2, 5));

//3.

const ask = (question, yes, no) => {
  (question) ? yes() : no();
};
ask(
  'Do you agree ?',
  () => {
    console.log("you agreed");
  },
  () => {
    console.log("you are not agreed");
  }
);

//4.

let calculator = {
 read() {
   this.num1 = Number(prompt('Enter the first number:'));
   this.num2 = Number(prompt('Enter the second number:'));
 },
 sum() {
   return this.num1 + this.num2;
 },
 mul() {
   return this.num1 * this.num2;
 }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//5.

const min = (a, b) => a < b ? a : b;
console.log(min(5, 3));