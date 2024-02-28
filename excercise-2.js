//1.

function filterRange(arr, a, b) {
     let filteredArray = [];
    for (i of arr) {
        if (i>= a && i <= b) {
            filteredArray.push(i);
        }
    }
    return filteredArray;
}
const arr = [5, 3, 8, 1];
const filtered = filterRange(arr, 1, 4);
console.log(filtered);

//2.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];

let names = [];
for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
}

console.log(names); 

//3.
   
function getAverageAge(users) {
    let totalAge = 0;
    for (let user of users) {
        totalAge += user.age;
    }
    return totalAge / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];
console.log(getAverageAge(arr));
  
