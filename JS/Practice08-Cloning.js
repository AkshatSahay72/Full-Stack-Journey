let src = {
    age: 12,
    wt: 68,
    ht: 180
};

let src2 = {
    value: 101,
    name: "Akshat"
};

// let dest = { ...src };
let dest = Object.assign({}, src);
// let dest = Object.assign({}, src, src2);

src.age = 29;

console.log("Src:  ", src);
console.log("Dest: ", dest);