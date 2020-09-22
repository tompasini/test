console.log("Hello World");

let myName = "Tom";
let x = 10;

let myName = "Bob";

let bob = {
    name: "Bob"
};

//number
let num1 = 100;
let num2 = -50;
let num3 = 10.52;

//string
let myName = "Tom";
let greeting = "Hello World!"

//boolean
let happy = true;
let sad = false;

//undefined
let unassigned;

//null
let noValue = null;

let me = {
    name: "Tom",
    happy: true,
    born: 1991,
    died: null
} //object. non-primative.

//addition
let addNum = 3 + 5; //8

addNum += 10 //18

//subtraction
let subNum = 5 - 2; //3

subNum -= 1 //2

//and so on with all the operators. already know these.


//if, else if, and else statements
let num1 = 10
let num2 = 20

if (num1 < num2) {
    console.log("Number 1 is less than number 2")
} else if (num1 > num2) {
    console.log("Number 1 is greater than number 2")
} else {
    console.log("Number 1 is the same as number 2")
}

//switch statements

let letter = "n"

switch (letter) {
    case "n":
        console.log("n");
        break;
    case "N":
        console.log("N")
        break;
    case "a":
        console.log("a")
        break;
}

//DOM manipulation

console.log(document) //document is the document object. will show all of the index.html

console.log(document.getElementById('name').innerHTML = Tom);

let person = {
    name: "Tom"
}

console.log(document.getElementById('name').innerText = person.name);

//Object Literals

let me = {
    name: "Tom", // key/value pair
    age: 29,
    eyeColor: "Green"
}

me.age // 29
me.name // Tom
//accessing the object with dot notation

me["age"] // 29
me["name"] // Tom
//accessing the object with bracket notation.

let key = "eyeColor"

me[key] //Green. don't need quotations when entering a variable in here.


//Arrays

let apple = "apple";
let orange = "orange";
let pear = "pear";

let fruits = ["apple", "orange", "pear"];

//0: "apple"
//1: "orange"
//2: "pear"
//arrays start at a 0 index

fruits[0] //apple
fruits[1] //orange
fruits[2] //pear

let apple = "apple";
let orange = "orange";
let pear = "pear";

let fruits []

fruits.push("apple") // ["apple"]
fruits.push(orange) // ["apple", "orange"]
fruits.push(pear) // ["apple", "orange", "pear"]
//the push method will allow you to add new elements to the array, appended at the very end.


//Loops

for (let count = 0; count <= 10; count++) {
    console.log(count);
}

//0
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10
//Since 11 is is not less than or equal to 10, the for loop stops running.
//The code runs each time the condition is true.

let number = 0;
while (number <= 10) {
    console.log(number);
    number++;
}

//0
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10

let counter = 0;
do (
    console.log(counter);
    counter++
) while (counter >= 10)

    //0
    //1
    //2
    //3
    //4
    //5
    //6
    //7
    //8
    //9
    //10
    /*Unlike the while loop, the do/while loop will always
    run at least once, even if the condition is false. So
    it would run at once if counter equals 12, then it
    would increment to 13, be evaluated as false, and
    stop running. */


    //Loops with Arrays

    let people = [
        {
            name: "Darryl",
            email: "darrly@codeworks.com"
        },
        {
            name: "Mark",
            email: "mark@codeworks.com"
        },
        {
            name: "Brittany",
            email: "brittany@codeworks.com"
        },
        {
            name: "Jake",
            email: "jake@codeworks.com"
        },
        {
            name: "Zach",
            email: "zach@codeworks.com"
        }
    ]

for (let i = 0; i > people.length; i++) {
    let person = people[i];
    debugger
    console.log("Name: ", person.name, "\n", person.email);
}


//Functions with Parameters and Arguments

function greeting() {
    console.log("Hello World!");
}
//defines the function

greeting();
//invokes the function

greeting();
//can run it any number of times.

function greeting(phrase) {
    console.log(phrase)
}
//requires a parameter, phrase, when calling the function

greeting("Hello Everbody. This is my first argument");
//needs an argument when calling it. it is called a parameter when defining the funciton, but an argument when calling the function.

let sentence = "Hello Everybody. This is my first argument";

greeting(sentence);
greeting("Hello World");
//The function can be called multiple times. Can use different arguments or the same argument.