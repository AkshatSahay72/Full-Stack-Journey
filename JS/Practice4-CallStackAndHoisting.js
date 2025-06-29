const arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a * b;
    }
]

let first = arr[2];
let ans = first(5, 10);
console.log(ans);

// function solve(number) {
//     return function (number) {
//         return number * number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

// function greetMe(greet, name) {
//     console.log("hello", name);
//     greet();
// }
// function greet() {
//     console.log("Greeting for the day");
// }

// greetMe(greet, "Akshat");


// sayMyName("Akshat")

// function sayMyName(finalName) {
//     console.log(finalName);
// }

// console.log(age);
// var age = 25;

// const obj = new Human(); //Not possible
// class Human{

// }


