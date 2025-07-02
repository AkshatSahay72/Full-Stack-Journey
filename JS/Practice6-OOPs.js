class Human{
    // Properties
    age = 13; // public
    #wt = 80; // private
    ht;

    // constructor
    constructor(newAge, height) {
        this.age = newAge;
        this.ht = height;
    }

    //behavior
    walking() {
        console.log("I am walking", this.#wt);
    }

    running() {
        console.log("I am running");
    }

    get fetchWt() {
        return this.#wt;
    }
    set modifyWt(val) {
        this.#wt = val;
    }
}

// let obj = new Human(10, 35);
// console.log(obj.ht)
// console.log(obj.age);
// obj.walking();
// obj.running();

// console.log(obj.fetchWt);

// console.log(obj.#wt);

function sayName(myName = 'Aki') {
    console.log("Hello", myName);
}
sayName(); 

sayName("Akshat");


