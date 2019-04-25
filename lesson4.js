// Lesson 4: Loops

// Quiz: JuliaJames (4-1)
// "Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:
// Loop through the numbers 1 to 100
// If the number is divisible by 3, print "Fizz"
// If the number is divisible by 5, print "Buzz"
// If the number is divisible by both 3 and 5, print "FizzBuzz"
// If the number is not divisible by 3 or 5, print the number
// TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. You can check if a number is divisible by another number by checking if x % y === 0.
// We're going to have you program your own version of FizzBuzz called "JuliaJames" (yes, imaginative, right?) Keep in mind that in an interview, you would want to write efficient code with very little duplication. We don't want you to worry about that for this question. Just focus on practicing using loops.
// Directions:
// Write a while loop that:
// Loop through the numbers 1 to 20
// If the number is divisible by 3, print "Julia"
// If the number is divisible by 5, print "James"
// If the number is divisible by 3 and 5, print "JuliaJames"
// If the number is not divisible by 3 or 5, print the number
// Option 1:
var x = 1;
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    } else if (x % 3 === 0){
        console.log("Julia");
    } else if (x % 5 === 0){
        console.log("James");
    } else {
        console.log(x);
    }
    x = x + 1;
}
 
// Option 2:
var x = 1 
while (x <=20){
    ((x % 3 === 0) && (x % 5 === 0)) ? console.log("JuliaJames") : 
    (x % 3 === 0) ? console.log("Julia") : 
    (x % 5 === 0) ? console.log("James") : 
    console.log(x);
    x = x + 1;
}

//---------------------------------------------------------------

//Quiz: 99 Bottles of Juice (4-2)
// Directions:
// Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
// 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
// 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
// ...
// 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
// 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
//Option 1:
var num = 99;
while (num >= 1){ 
    if (num > 2){
    console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }else if(num === 2) {
        console.log(num +" bottles of juice on the wall! "+num +" bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }else {
        console.log(num +" bottle of juice on the wall! "+num +" bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

// Option 2: 
var num = 99;
while (num >= 1){
    (num > 2) ? console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!"):
    (num === 2) ? console.log(num +" bottles of juice on the wall! "+num +" bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!"):
    console.log(num +" bottle of juice on the wall! "+num +" bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    num = num -1;
}

//---------------------------------------------------------------

//Quiz: Countdown, Liftoff! (4-3)
// NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:
// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".
// Directions:
// Write a while loop that counts down from 60 seconds and:
// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.
// Option 1:
var seconds = 60;
while (seconds >= 0){
     if (seconds === 50){
        console.log("Orbiter transfers from ground to internal power");
    } else if (seconds === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (seconds === 16){
        console.log("Activate launch pad sound suppression system");
    } else if (seconds === 10){
        console.log("Activate main engine hydrogen burnoff system");
    } else if (seconds === 6){
        console.log("Main engine start");
    } else if (seconds === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    } else{
        console.log("T-" + seconds + " seconds");
    }
    seconds --; 
}

// Option 2: 
var seconds = 60;
while (seconds >=0){
    (seconds === 50) ? console.log("Orbiter transfers from ground to internal power") :
    (seconds === 31) ? console.log("Ground launch sequencer is go for auto sequence start") :
    (seconds === 16) ? console.log("Activate launch pad sound suppression system") :
    (seconds === 10) ? console.log("Activate main engine hydrogen burnoff system") :
    (seconds === 6) ? console.log("Main engine start") :
    (seconds === 0) ? console.log("Solid rocket booster ignition and liftoff!") :
    console.log("T-" + seconds + " seconds");
    seconds --;
}

//---------------------------------------------------------------

// Quiz: Changing the Loop (4-4)
// Directions:
// Rewrite the following while loop as a for loop:
// var x = 9;
// while (x >= 1) {
//   console.log("hello " + x);
//   x = x - 1;
// }
for (var x = 9; x >= 1; x--){
    console.log('hello ' + x);
}

//---------------------------------------------------------------

// Quiz: Fix the Error 1 (4-5)
// Directions:
// Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
// for (x < 10; x++) {
//   console.log(x);
// }
for (var x = 5; x < 10; x++) {
    console.log(x);
}

//---------------------------------------------------------------

// Quiz: Fix the Error 2 (4-6)
// Directions:
// The for loop below has an error. Fix it!
// for (var k = 0 k < 200 k++) {
//   console.log(k);
// }
for (var k = 0; k < 200; k++) {
    console.log(k);
}

//---------------------------------------------------------------

// Quiz: Factorials! (4-7)
// Directions:
// Write a for (note: not a function) loop that prints out the factorial of the number 12:
// A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
// 3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
// 4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
// 5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120
// Save your final answer in a variable called solution and print it to the console.
var solution = 1;
for (let i = 1; i<=12; i++){
    solution *= i;
}
console.log(solution);

//Testing factorial
var fatorial = 1;
for (let i = 1; i<=12; i++){
    fatorial = fatorial * i; 
    console.log(i, fatorial);
}

//---------------------------------------------------------------

// Quiz: Find my Seat (4-8)
// Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.
// Example output for row-seat information: output each row and seat number on a separate line
// 0-0
// 0-1
// 0-2
// ...
// 25-97
// 25-98
// 25-99
for (var rows=0; rows<=25; rows++){
    for (var seats=0; seats<=99; seats++){
        console.log(rows + " , " + seats);
    }
}
