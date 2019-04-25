// Lesson 7: Objects

// Quiz: Umbrella (7-1)
// Directions:
// Using the umbrella example from the previous video, see if you can follow the example open() method and create the close() method. It's alright if you have trouble at first! We'll go into more detail later in this lesson.
// var umbrella = { 
//   color: "pink",
//   isOpen: false,
//   open: function() { 
//     if (umbrella.isOpen === true) {
//       return "The umbrella is already opened!";
//     } else {
//       umbrella.isOpen = true;
//       return "Julia opens the umbrella!";
//     }
//    }
// };
// TIP: Remember to put all of your object's properties and methods inside curly braces: var myObject = { greeting: "hello", name: "Julia" };. Also, remember that an object is just another data type. Just like how you would put a semicolon after a string variable declaration var myString = "hello";, don't forget to put a semi-colon at the end of your object's declaration.
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if (umbrella.isOpen === false) {
            return "The umbrella is closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closed the umbrella!";
        }
}
};

//---------------------------------------------------------------

// Quiz: Menu Items (7-2)
// Directions:
// Create a breakfast object to represent the following menu item:
// The Lumberjack - $9.95
// eggs, sausage, toast, hashbrowns, pancakes
// The object should contain properties for the name, price, and ingredients.
var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredientes: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

//---------------------------------------------------------------

// Quiz: Bank Accounts 1 (7-3)
// Directions:
// Using the given object:
// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   }
// };
// add a printAccountSummary() method that returns the following account message:
// Welcome!
// Your balance is currently $1000 and your interest rate is 1%.
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },

  printAccountSummary: function() { return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."}
};

console.log(savingsAccount.printAccountSummary());

//---------------------------------------------------------------

// Quiz: Facebook Friends (7-5)
// Directions:
// Create an object called facebookProfile. The object should have 3 properties:
// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:
// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
var facebookProfile = {
    name: "Caroline",
    friends: 900,
    messages: ["Hello, world!", "Tired and Hungry", "Give Peace a Chance"],
    postMessage: function(message) {
    facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
    facebookProfile.friends++;
    },
    removeFriend: function() {
    facebookProfile.friends--;
    }
};

facebookProfile.postMessage("I want to grab some beer!");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);

console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);

facebookProfile.addFriend();
console.log(facebookProfile.friends);

//---------------------------------------------------------------

// Quiz: Donuts Revisited (7-6)
// Here is an array of donut objects.
// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];
// Directions:
// Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
// Jelly donuts cost $1.22 each
// Chocolate donuts cost $2.45 each
// Cider donuts cost $1.59 each
// Boston Cream donuts cost $5.99 each
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donuts){
    console.log(donuts.type + " donuts cost $" + donuts.cost + " each");
});
