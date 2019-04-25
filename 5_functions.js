// Lesson 5: Functions

// Quiz: Laugh it Off 1 (5-1)
//Directions:
// Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
function laugh () {
    var lol = "hahahahahahahahahaha!";
    return lol;
}
console.log(laugh());

//---------------------------------------------------------------

// Quiz: Laugh it Off 2 (5-2)
// Directions:
// Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
// TIP: You might need a loop to solve this!
// Here's an example of the output and how to call the function that you will write:
// console.log(laugh(3));
// Prints: "hahaha!"
let lol = "";
function laugh (num){
    for (i=0; i<num; i++){
        lol += 'ha';
    } 
    return lol;
}
console.log(laugh(1)+"!");

//---------------------------------------------------------------

// Quiz: Build a Triangle (5-3)
// Directions:
// For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.
// buildTriangle(10);
// Returns:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * * 
// We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.
// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }
// You will need to call this makeLine() function in buildTriangle().
// This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(width){
    var triangle="";
    for (var i = 1; i <= width; i++){
        var starLine = makeLine(i);
        buildtriangle += starLine;
    }
    return triangle;
}
console.log(buildTriangle(10));

//---------------------------------------------------------------

// Quiz: Laugh (5-4)
// Directions:
// Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
// laugh(3);
// Returns: hahaha!
var laugh = function(num){
    var lol = "";
    for (i = 0; i < num; i++){
        lol += "ha";
    }
    return lol;
}
console.log(laugh(10));

//---------------------------------------------------------------

// Quiz: Cry (5-5)
// Directions:
// Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:
// cry();
// Returns: boohoo!
var cry = function sad(){
    var message = "boohoo!";
    return message;
}
console.log(cry());

//---------------------------------------------------------------

// Quiz: Inline(5-6)
// Directions:
// Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
// emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
// Prints: "I am happy, haha!"
// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions('happy', function laugh(numb) {
    var smile = '';
    for(var i = 0; i < numb; i++) {
        smile += 'ha';
    }
    return smile + '!';
    
})
