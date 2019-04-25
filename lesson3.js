// Lesson 3: Conditionals

// Quiz: Even or Odd (3-2)
// Directions:
// Write an if...else statement that:
// prints "even" if the number is an even number
// prints "odd" if the number is an odd number
// Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one:
// console.log(12 % 3);
// console.log(10 % 4);
// Result: 
// 0 
// 2
// The answer for 12 % 3 is 0 because twelve divided by three has no remainder. 10 % 4 is 2 because ten divided by 4 has a remainder of two.
// Make sure to test your code with different values. For example:
// If number equals 1, then odd should be printed to the console.
// If number equals 12, then even should be printed to the console.
var number = 2;
if (number%2 == 0) {
    console.log(number + ' is an even number');    
} else {
    console.log(number + ' is an odd number');
}

//---------------------------------------------------------------

// Quiz: Musical Groups (3-3)
// Musical groups have special names based on the number of people in the group.
// For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.
// Directions:
// Write a series of conditional statements that:
// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4
// TIP: Test your code with different values. For example,
// If musicians equals 3, then "trio" should be printed to the console.
// If musicians equals 20, then "this is a large group" should be printed to the console.
// If musicians equals -1, then "not a group" should be printed to the console.
// Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!
var musicians = 1; // Change this variable to code test 
if (musicians <=0){
    console.log('Not a group');
} else if (musicians == 1){
    console.log('Solo');
} else if (musicians == 2){
    console.log('Duet');
} else if (musicians == 3){
    console.log('Trio');
} else if (musicians == 4){
    console.log('Quartet');
} else{
    console.log('This is a large group!');
}

//---------------------------------------------------------------

// Quiz: Muder Mystery (3-4)
// Directions:
// For this quiz, you're going to help solve a fictitious murder mystery that happened here at Udacity! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.
// Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:
// four rooms: the ballroom, gallery, billiards room, and dining room,
// four weapons: poison, a trophy, a pool stick, and a knife,
// and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
// We also know that each weapon corresponds to a particular room, so...
// the poison belongs to the ballroom,
// the trophy belongs to the gallery,
// the pool stick belongs to the billiards room,
// and the knife belongs to the dining room.
// And we know that each suspect was located in a specific room at the time of the murder.
// Mr. Parkes was located in the dining room.
// Ms. Van Cleve was located in the gallery.
// Mrs. Sparr was located in the billiards room.
// Mr. Kalehoff was located in the ballroom.
// To help solve this mystery, write a combination of conditional statements that:
// sets the value of weapon based on the room and
// sets the value of solved to true if the value of room matches the suspect's room
// Afterwards, use this template to print a message to the console if the mystery was solved:
// __________ did it in the __________ with the __________!
// What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:
// Mr. Parkes did it in the dining room with the knife!
// Be sure to watch out for any extra or missing characters (including spaces and punctuation marks) in your output string as well!
// TIP: Test your code with different values. For example,
// If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console.
// change the value of `room` and `suspect` to test your code
var room = 'gallery';
var suspect = 'Ms. Van Cleve';
var weapon = '';
var solved = true;
if (room=='dining room') {
    var weapon = 'knif';
} else if (room=='gallery') {
    var weapon = 'trophy';
} else if (room=='billiards room') {
    var weapon = 'pool stick';
} else {
    var weapon = 'poison';
}

if (solved) {
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon);;
}

//---------------------------------------------------------------

// Quiz: Checking your Balance (3-5)
// Directions:
// Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.
// Use the following variables in your solution:
// balance - the account balance
// isActive - if account is active
// checkBalance - if you want to check balance
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0.00;
var checkBalance = false;
var isActive = true;
if (checkBalance == true && isActive == true && balance > 0){
    console.log('Your balance is $' + balance);
} else if (checkBalance == true && isActive == false){
    console.log('Your account is no longer active');
} else if (checkBalance == true && isActive == true && balance == 0){
    console.log('Your account is empty');
} else if (checkBalance == true && isActive == true && balance < 0){
    console.log('Your balance is negative. Please contact bank');
} else if (checkBalance == false){
    console.log('Thank you. Have a nice day!');
}

//---------------------------------------------------------------

// Quiz: Ice Cream (3-6)
// Directions:
// Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
// if flavor is set to vanilla or chocolate and
// if vessel is set to cone or bowl and
// if toppings is set to sprinkles or peanuts
// If the above conditions are true, then print out:
// I'd like two scoops of __________ ice cream in a __________ with __________.
// Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,
// I'd like two scoops of vanilla ice cream in a cone with peanuts.
// TIP: Make sure to test your code with different values. For example,
// If flavor equals "chocolate", vessel equals "cone" and toppings equals "sprinkles", then "I'd like two scoops of chocolate ice cream in a cone with sprinkles." should be printed to the console.
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "bowl";
var toppings = "peanuts";
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings ==="peanuts")){
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings);  
} else {
    console.log("I'd like nothing. Thank you!");
}

//---------------------------------------------------------------

// Quiz: What do I Wear? (3-7)
// Directions:
// Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19;
var shirtLength = 28;
var shirtSleeve = 8.37;
// Write your if/else code here
if ((shirtWidth <=19) && (shirtLength == 28) && (shirtSleeve <= 8.37)){
	console.log('Your shirt size is S')
} else if ((shirtWidth >= 20 && shirtWidth <= 21) && (shirtLength == 29) && (shirtSleeve >=3.38 && shirtSleeve <= 8.62)){
	console.log('Your shirt size is M')
} else if ((shirtWidth >= 22 && shirtWidth <= 23) && (shirtLength == 30) && (shirtSleeve >=8.63 && shirtSleeve <= 8.87)){
	console.log('Your shirt size is L')
} else if ((shirtWidth >= 24 && shirtWidth <= 25) && (shirtLength >= 31 && shirtLength <= 32) && (shirtSleeve >=8.88 && shirtSleeve <= 9.62)){
	console.log('Your shirt size is XL')
} else if ((shirtWidth >= 26 && shirtWidth <= 27) && (shirtLength == 33) && (shirtSleeve >=9.63 && shirtSleeve <= 10.12)){
	console.log('Your shirt size is 2XL')
} else if ((shirtWidth >= 28) && (shirtLength == 34) && (shirtSleeve == 10.13)){
	console.log('Your shirt size is 3XL')
} else {
	console.log("N/A")
}

//---------------------------------------------------------------

// Quiz: Navigating the Food Chain (3-8)
// Directions:
// From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.
// Animals that eat only plants are called herbivores
// Animals that eat only other animals are called carnivores
// Animals that eat both plants and animals are called omnivores
// Directions:
// Write a series of ternary statements that sets the variable category equal to:
// "herbivore" if an animal eats plants
// "carnivore" if an animal eats animals
// "omnivore" if an animal eats plants and animals
// undefined if an animal doesn't eat plants or animals
// Use the eatsPlants and eatsAnimals variables to test your code.
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants && eatsAnimals ? "Omnivores" : eatsPlants ? "Herbivores" : eatsAnimals ? "Carnivores" : "Undefined";
console.log(category);

//---------------------------------------------------------------

// Quiz: Back to School (3-9)
// In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
// no high school diploma earned an average of $25,636/year,
// a high school diploma earned an average of $35,256/year,
// an Associate's degree earned an average of $41,496/year,
// a Bachelor's degree earned an average of $59,124/year,
// a Master's degree earned an average of $69,732/year,
// a Professional degree earned an average of $89,960/year,
// and a Doctoral degree earned an average of $84,396/year.
// Directions:
// Write a switch statement to set the average salary of a person based on their type of completed education.
// Afterwards, print the following to the console.
// In 2015, a person with __________ earned an average of __________/year.
// Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks). For help, refer to the findings above.
// In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
// change the value of `education` to test your code
var education = "a Bachelor's degree";
// set the value of this based on a person's education
var salary = 0;
switch (education){
    case "no high school diploma":
    salary = "In 2015, a person with no high school diploma earned an average of $25,636/year."
    break;
    case "a high school diploma":
    salary = "In 2015, a person with a high school diploma earned an average of $35,256/year."
    break;
    case "an Associate's degree":
    salary = "In 2015, a person with an Associate's degree earned an average of $41,496/year."
    break;
    case "a Bachelor's degree":
    salary = "In 2015, a person with a Bachelor's degree earned an average of $59,124/year."
    break;
    case "a Master's degree":
    salary = "In 2015, a person with a Master's degree earned an average of $69,732/year."
    break;
    case "a Professional degree":
    salary = "In 2015, a person with a Professional degree earned an average of $89,960/year."
    break;
    case "a Doctoral degree":
    salary = "In 2015, a person with a Doctoral degree earned an average of $84,396/year."
    break;
}
console.log(salary);

