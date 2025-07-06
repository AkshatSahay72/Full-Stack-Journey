// Compile time Error

// SyntaxError
// console.log(1;

// Runtime Error
// console.log(c);


// // let x = 10;
// try {
//     console.log(x);
// } catch (e) {
    
//     console.log("I m inside Catch block", e);
// } finally {
//     console.log("This will run everytime")
// }

try {
    console.log(x);
} catch (e) {
    throw new Error("First declare the variable");
}