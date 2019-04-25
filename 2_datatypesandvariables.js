// Lesson 2: Data Types & Variables

// Quiz: Semicolons! (2-8)
// Directions:
// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation
// where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolons!
var thingOne = 'red';
var thingTwo = 'blue';
console.log(thingOne + ' ' + thingTwo);

//---------------------------------------------------------------

// Quiz: What's my name? (2-9)
// Directions:
// Create a variable called fullName and assign it your full name as a string.
var fullName = 'Caroline Cristina Jandoso';
console.log(fullName);

//---------------------------------------------------------------

// Quiz: Out to Dinner (2-10)
// Directions:
// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
// Hint: 15% in decimal form is written as 0.15_._
// TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
console.log('The total bill was $' + total.toFixed(2));

//---------------------------------------------------------------

// Quiz: Mad Libs (2-11)
// Directions:
// Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
// "The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// Assign the resulting string to a variable called madLib.
var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';
var  madLib = ('The Intro to JavaScript course is ' + adjective1 + '. James and Julia are so ' + adjective2 + '. I cannot wait to work through the rest of this ' + adjective3 + ' content!');
console.log(madLib);

//---------------------------------------------------------------

// Quiz: One Awesome Message(2-12)
// Here are two awesome messages:
// Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
// Hi, my name is James. I love baseball. In my spare time, I like to read.
// Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
var firstName = ['Julia', 'James'];
var interest = ['cats', 'baseball'];
var hobby = ['play video games', 'read'];
var awesomeMessage = ('Hi, my name is ' + firstName[0] + '. I love ' + interest[0] + '. In my spare time, I like to '+ hobby[0]);
console.log(awesomeMessage);
var awesomeMessage = ('Hi, my name is ' + firstName[1] + '. I love ' + interest[1] + '. In my spare time, I like to '+ hobby[1]);
console.log(awesomeMessage);