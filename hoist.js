// Rewrite the code the way it would be seen by the 
// interpreter and predict the output. An example is 
// shown here:

// GIVEN
console.log(example);
var example = "I'm the example!";

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// After you've made your prediction, run the 
// original code to find out if you were right! If 
// your predictions were incorrect, look back at how 
// the code is hoisted by the interpreter.

// NOTE:

// Run the same code as above with ES6 syntax and 
// compare your results:

console.log(example);
let example = "I'm the example!";

// Even if let and const prevent a lot of the 
// confusing behavior of JavaScript's hoisting, these 
// are ES6 constructs and a huge amount of the world's 
// live JavaScript code is still ES5. Understanding 
// how ES5 hoists var and the rules of scoping are 
// important for every JavaScript developer!

// 1. 
console.log(hello);                                   
var hello = 'world';                                 
// Rewrite the given code as it is seen by the interpreter
var hello;
console.log(hello); // Logs undefined
hello = 'world';

// 2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} // This code runs 'magnet'
// Rewrite the given code as it is seen by the interpreter
var needle;
function test(){
    var needle;
    needle = "magnet";
    console.log(needle);
}
needle = "haystack"
test();
console.log(needle);
// This code runs:
//  magnet
//  haystack

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // This code runs 'super cool'
// Rewrite the given code as it is seen by the interpreter
var brendan;
function print(){
    var brendan;
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// This code runs 'super cool'

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} // Code runs 'chicken, half-chicken'
// Rewrite the given code as it is seen by the interpreter
var food;
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}
var food = 'chicken';
console.log(food);
eat(); // Code runs 'chicken, half-chicken'

// 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); // This code throws an error
// Rewrite the given code as it is seen by the interpreter
var food;
function mean(){
    var food = 'fish';
    console.log(food);
    food = 'chicken';
    console.log(food);
}
//console.log(food);
mean(); // This code runs 'fish, chicken'

// 6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // This code runs 'undefined, rock, r&b, disco'
// Rewrite the given code as it is seen by the interpreter
var genre;
function rewind(){
    var genre = 'r&b';
    console.log(genre);
    genre = 'rock';
    console.log(genre);
}
var genre = 'disco';
rewind();
console.log(genre); // This code runs 'r&b, rock, disco'

// 7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // This code runs 'san jose, seattle, burbank, san jose'
// Rewrite the given code as it is seen by the interpreter
var dojo;
function learn(){
    var dojo = 'burbank';
    console.log(dojo);
    dojo = 'seattle';
    console.log(dojo);
}
var dojo = 'san jose';
learn();
console.log(dojo); // This code runs 'burbank, seattle, san jose'

// 8. Bonus ES6: const (NOT SOLVED: NEEDS WORK)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
} // This code throws an error
// Rewrite the given code as it is seen by the interpreter
const dojo = {}
function makeDojo(name, students){
    function makingDojo() {
        dojo.name = name;
        dojo.students = students; 
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
    makingDojo();
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// CHECKLIST:
//     1. Rewrite the given code as it is seen by the interpreter
//     2. Predict the outputs
//     3. Run the original code and compare the outputs to your predictions