let arr = [1, 2, 3, 4, 5]
// console.log(arr)

let brr = new Array('love', 1, true)
// console.log(brr)

arr.push(9);
// console.log(arr)

arr.pop();
// console.log(arr)

arr.shift();
// console.log(arr);

arr.unshift(1);
// console.log(arr);

// console.log(arr.slice(2, 4));

arr.splice(1, 0, "aki");
// console.log(arr)

crr = [10, 20, 30,33,45,46,75,65];

let ans = crr.map((n) => {
    return n * n;
})

// console.log(ans)

let bns = crr.filter((n) => {
    return n % 2 === 0;
})
// console.log(bns);

arr = [10, 20, 30, 40];
ans = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
// console.log(ans);

crr.sort();
// console.log(crr);

arr.forEach((value, index) => {
    // console.log(value, index);
})

// for (let i in arr) {
//     console.log(i);
// }

let arr1 = [10, 20, 30, 40]
for (let i of arr1) {
    // console.log(i);
}


arr = [10, 20, 30, 40, 50];

function getSum(arr) {
    let len = arr.length;
    let sum = 0;
    for (let i = 0; i < len; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(getSum(arr));