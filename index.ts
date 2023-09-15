
//Question no.2
//personal message:stote a persons name in a variable and print a message to that person.your message should be simple ,such as, "Hello Eric,would you like to learn some phyton today?"
let userName :string = "milli";
console.log("Hello",userName, "would you like to learn some typescript today?");

                   //Question no.3
//Name cases:stores a persons name in a variable , than stores a person name in a lowercase,upercase,titlecase
var personName:string = "Harry";
// name in lowercase
console.log("person's name in lowercase :",personName.toLowerCase());
//name in uppercase
console.log("person's name in uppercase :",personName.toUpperCase());
//name in titlecase
function toTitleCase(name: string): string {
    return name.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
};
const titleCaseName = toTitleCase(personName);

console.log("person's name in titlecase :",titleCaseName); 

                    //Question no.4
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
const quotes:string='“A person who never made a mistake never tried anything new.”';

console.log("Albert Einstein once said, ",quotes);

                   //Question no.5
// repeat Q NO.4 ,but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
const famousPerson:string = "Albert Einstein";
const quote:string ='“A person who never made a mistake never tried anything new.”'
console.log(famousPerson,"once said, ",quote);

                  //Question no.6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personsName:string= "\t Abdul Rafay \n";
console.log("Name with Whitespace", personsName);
let result= personsName.trim()
console.log("Name without Whitespace:", result);

                  //Question no.7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition:",6+2);
console.log("Substration:",10-2);
console.log("Multiplication:",4*2);
console.log("Division:",16/2);

                  //Question no.8
//You should create four lines that look like this:
// console.log(5 + 3);
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");

                 //Question no.9
//  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let myFavoriteNumber: number = 7;
console.log("Note that my favorite number is ${myFavoriteNumber}");

                //Question no.10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//This program is for addition of two numbers that makes 8.
console.log("Addition:",6+2);

               //Question no.11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsNames: string[] = ["Harry", "Rafay", "Rizwan","Abdullah"];
for (let index=0; index<friendsNames.length; index++){
    console.log(friendsNames[index]);
}

               //Question no.12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friendsList: string[] = ["Harry", "Rafay", "Rizwan","Abdullah"];
for (let index=0; index<friendsNames.length; index++){
    console.log("Hi! ${friendsList[i]}, I hope that you are having a fantastic day");
}

               //Question no.13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let ownArray:string[]= ["motercyle","car ","bicycle","bus","train"];
let properties:string[]=[ "its name is Hyundai Sonata"," it is beautiful and stylish."," five seater."," it is very comfortable."," too much expansive"," it has automatic driving system."]
for (let index = 0; index < ownArray.length; index++) {
    console.log(`I would like to own a ${ownArray[index]} because it${properties[index]}`);
}

                //Question no.14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest:string[]=["Harry","Rafay","Abdullah"]
for (let index = 0; index < guest.length; index++) {
    console.log(`I would like to invite ${guest[index]} you at dinner tonight at my place, I hope that you will come`);    
}

                //Question no.15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Missing Person
let personCannotMakeIt:string= "Abdullah";
console.log(`Guest who not come ${personCannotMakeIt}`);
// Replace missing person with new person
guest.splice(2,1,"Ashraf");
console.log(guest);
// print second set of invition message
guest.forEach((guest ) => {
    console.log(`I would like to invite ${guest} you at dinner tonight at my place,I hope that you will come`);    
});

                   //Question no.16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log(`It is to inform you that I found a bigger table` );
// Add one new guest to the beginning of your array.
guest.unshift("Shadab");
console.log(guest);
// Add one new guest to the middle of your array
guest.splice(2,0,"Rizwan")
console.log(guest);
// Use append() to add one new guest to the end of your list
guest.push("Babar")

// Print a new set of invitation messages, one for each person in your list.
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, you are invited in dinner tonight.`);
 });

                  //Question no.17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
// updated list
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, I have space for only two guests`);
 });
//  Remove guests from your list 
while (guest.length >2) {
    let removeGuest= guest.pop()
    console.log(`sorry ${removeGuest} you are not invited on dinner`);
}
// Print a message to each of the two people still on your list
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, you're still invited`);
 });
//  Remove the last two names from your list
guest.pop();
guest.pop();
console.log(`empty list at the end of your program: ${guest}`);

                //Question no.18
//Seeing the World: Think of at least five places in the world you’d like to visit.
/*• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let placedToVisit: string[] = ["Seoul", "Istanbul", "Bangkok", "Beijing", "Kashmir"];
console.log(placedToVisit);

placedToVisit.sort();
console.log(placedToVisit);

placedToVisit.reverse();
console.log(placedToVisit);

placedToVisit.reverse();
console.log(placedToVisit);

                 //Question no.19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("people you are inviting to dinner",guest.length);

                 //Question no.20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countryList:string[]=["Pakistan","South Korea","Thailand","Turkey","China"];
for (let index = 0; index < countryList.length; index++) {
    console.log(countryList[index]);
}

                  //Question no.21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let itemObject={
    Name:"Manahil Rizwan",
    Age:17,
    isStudent:true,
    Hobbies: ["playing","Singing"]
};
console.log(itemObject);

                 //Question no.22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let numbers: number[] = [10, 20, 30, 40, 50];

let errorNumber = numbers[7]; // This will cause an error

console.log(errorNumber); // We won't see this message

                //Question no.23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
/*let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// 1
let age:number= 17;
// True
console.log("is age < '20'? I predict True");
console.log(age< 20);
// False
console.log("is age > '20'? I predict False");
console.log(age>20);

// 2
let aim:string="Doctor";
// true
console.log("is aim == 'Doctor'? I predict True");
console.log(aim == "Doctor");
// False
console.log("is aim == 'engineer'? I predict False");
console.log(aim == "engineer");

// 3
let role:string="Devolper";
// true
console.log("is role == 'Devolper'? I predict True");
console.log(role == "Devolper");
// false
console.log("is role == 'devolper'? I predict False");
console.log(role == "devolper");

// 4
let myAge ="17";
// true
console.log("myAge == '17'? I predict True");
console.log(myAge == "17");
// false
console.log("myAge == '20'? I predict False");
console.log(myAge == "20");

// 5
let month:string= "November";
// true
console.log("is Month == 'November'? I predict True");
console.log(month == "November");
// false
console.log("is Month == 'December'? I predict False");
console.log(month == "December");

                //Question no.24
//   More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

var amimalName: string = "lion" ;
// Tests for equality
console.log("Tests for equality? predict True");
console.log("animalName:==lion");
// Tests for inequality
console.log("Tests for inequality? predict False");
console.log("animalName!=lion");

// Tests using the lower case function
let studentsLearning:string="Yes";
// true
console.log("Tests using the upper case 'Yes'? I predict True");
console.log(studentsLearning == "Yes");
// false
console.log("Tests using the lower 'yes'? I predict False");
console.log(studentsLearning == "yes");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let Number1:number= 5;
let Number2:number= 9;
console.log(Number1< Number2); //true
console.log(Number1> Number2);   //false
console.log(Number1== Number2); //false
console.log(Number1!= Number2);  //true
console.log(Number1<= Number2); //true
console.log(Number1>= Number2);  //false

// • Tests using "and" and "or" operators
const x:number=5;
const y:number=15;
const z:number=25;
// and &&
console.log(x<y && y<z);  //true
console.log(x>y && y<z);  //false
// or ||
console.log(x>y || y<z);  //false
console.log(x>y || y>z);  //true

// • Test whether an item is in a array
const color:string[]=["red","blue","green"]
console.log(color.includes("purple"));  //false
console.log(color.includes("red"));  // true

// • Test whether an item is not in a array
const fruits:string[]=["banaba","apple","orange"];
console.log(!fruits.includes("apple"));  //false
console.log(!fruits.includes("grapes"));  // true

            //Question no.25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

var alien_color:string[]=["green", "yellow", "red"];

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color.includes("green")) {
    console.log("You Just Earn 5 Points");
    
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color.includes("green")) {
    console.log("You Just Earn 5 Points");
};
if (!alien_color.includes("green")) {
    console.log("You Just Earn 5 Points");
}                             

              //Question no.26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color.includes("green")) {
    console.log("You Just Earn 5 Points for shooting the alien.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (!alien_color.includes("green") ) {
    console.log("You Just Earn 10 Points for shooting the alien.");
} ;

// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color.includes("green")) {
    console.log("You Just Earn 5 Points for shooting the alien.");
}else{
    console.log("You Just Earn 10 Points for shooting the alien.");
};

                  //Question no.27
//// Alien Colors #3: Turn your if-else chain from Exercise --5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color.includes("green")) {
    console.log("You Just Earn 5 Points ");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color.includes("yellow")){
    console.log("You Just Earn 10 Points ");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color.includes("red")){
    console.log("You Just Earn 15 Points ");
};

                 //Question no.28
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let ageOfPerson:number = 17;

if (ageOfPerson < 2 ){
    console.log(`The person is a baby`)
}
if (ageOfPerson >= 2 && ageOfPerson < 4 ){
    console.log(`The person is a toddler`)
}
if (ageOfPerson >= 4 && ageOfPerson < 13 ){
    console.log(`The person is a kid`)
}
if (ageOfPerson >= 13 && ageOfPerson < 20 ){
    console.log(`The person is a teenager`)
}
if (ageOfPerson >= 20 && ageOfPerson < 65 ){
    console.log(`The person is an adult`)
}
if (ageOfPerson > 65 ){
    console.log(`The person is elder`)
}

                //Question no.29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make an array of your three favorite fruits
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Write five independent if statements to check for certain fruits
if (favorite_fruits.includes('banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
  console.log("You're a fan of apples!");
}

if (favorite_fruits.includes('strawberry')) {
  console.log("Strawberries are one of your favorites!");
}

if (favorite_fruits.includes('orange')) {
  console.log("You enjoy oranges!");
} else {
  console.log("Oranges are not in your favorites.");
}

if (favorite_fruits.includes('grape')) {
  console.log("Grapes are among your favorite fruits!");
} else {
  console.log("Grapes didn't make it to your top three.");
}

                  //Question no.30
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames: string[] = ["Admin","Eric","John","Sam"];
for (let i=0; i<userNames.length; i++ ){
    if (userNames[i] === "Admin"){
        console.log(`Hello admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}

               //Question no.31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let userNames: string[] = ["Admin", "Eric", "John"];
userNames.splice(0, 3);
console.log(userNames);
if (userNames = []){
console.log(`We need to find some users`)
 }

                //Question no.32
//// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let currentUsers:string[]=["Ashraf","Harry","Rafay","Abdullah","Rizwan"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers:string[]=["Ashar","Asjad","Ahmad","Rizwan","Abdullah"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (let newUser of newUsers) {
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUsers}' is already taken. Please choose a different one.`);
    } else {
        console.log(`The username '${newUsers}' is available.`);
    }
}

                //Question no.33
let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<ordinalNumbers.length; i++){
    if (ordinalNumbers[i] = 1){
        console.log(`"1st"`);
    }
    if (ordinalNumbers[i] = 2){
        console.log(`"2nd"`);
    }
    if (ordinalNumbers[i] = 3){
        console.log(`"3rd"`);
    }
    if (ordinalNumbers[i] = 4){
        console.log(`"4th"`);
    }
    if (ordinalNumbers[i] = 5){
        console.log(`"5th"`);
    }
    if (ordinalNumbers[i] = 6){
        console.log(`"6th"`);
    }
    if (ordinalNumbers[i] = 7){
        console.log(`"7th"`);
    }
    if (ordinalNumbers[i] = 8){
        console.log(`"8th"`);
    }
    if (ordinalNumbers[i] = 9){
        console.log(`"9th"`);
    }
    }

                //Question no.34
let myFavoritePizza: string[] = [ "Peri Peri", "Hot Tandoori", "Cheese Lovers","Malai Boti"];
for (let pizza of myFavoritePizza){
    console.log(pizza);
    };
     // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
    for (let pizza of myFavoritePizza){
    console.log(`I like`, pizza, `pizza`);
    };
    
    // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as
    // I really love pizza!
    
    console.log(`I really like pizza. \n
    It is very tasty. \n
    I also recommend it for you`)

                  //Question no.35
//// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Lion", "Tiger", "Cat"];
for (let animal of animals){
    console.log(animal)
};
for (let animal of animals){
    console.log(animal, `would make a great pet.`)
};
console.log(`Any of these animals would make a great pet!`)

                    //Question no.36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message:string ){
 console.log(`We are making "${size}" size shirts with the  message "${message}"`)
}
make_shirt("Medium", "I am a Blink");

                     //Question no.37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

make_shirt("Small", "I love TypeScript.");
make_shirt("Medium", "I am a Blink.");
make_shirt("Large", "I like Badminton.");

                     //Question no.38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of whichis not in the
// default country.

function describe_city(city: string, country: string){
    console.log(`${city} is in ${country = "Pakistan"}`)
    }
    describe_city("Bangkon", "Thailand" )
    describe_city("Faisalabad", "Pakistan" )
    describe_city("Seoul", "South Korea" );

                       //Question no.39
/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city:string, country:string) {
    console.log(`"${city}, ${country}"`);
    
};
city_country("Faislabad","Pakistan");
city_country("Istanbul","Turkey");
city_country("Bangkok","Thailand");

                      //Question no.40
//// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string){
    let newAlbum = {
        name_Of_Artist: artist_name,
        title_Of_Album: album_title
    }
    return newAlbum
}
let album1 = make_album("Jisoo", "Forever Young");
let album2 = make_album("Lalisa", "Money");
let album3 = make_album("Jennie", "Solo");
let album4 = make_album("Rose","Gone");
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

              //Question no.41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }  
  let magicianNames: string[] = ["David ", "Harry Houdini", " Jillette", "Teller"];
  show_magicians(magicianNames);
  console.log(show_magicians);

            //Question no.42
//Modify upper program and make array to The Great magician then use show_mag function to check the changes*/

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }  
    return greatMagicians;
  }
    let magicianNames2: string[] = ["David ", "Harry Houdini", "Jillette", "Teller"];
  let greatMagicians = make_great(magicianNames2);
    show_magicians(greatMagicians);
    console.log(show_magicians);

               //Question no.43
//// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

make_great(greatMagicians);
const newArray:string[]=["Sam","John","James","Harry"];
show_magicians(newArray);

               //Question no.44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function sandwich(items:string[]) {
    console.log("You ordered a sandwich with the following ingredients:");
    for (const item of items) {
    console.log(`- ${item}`);
} 
}

const orderSandwich=["Ham", "Cheese", "Lettuce", "Tomato"];
sandwich(orderSandwich);

               //Question no.45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function cars_info(manufacturer: string, model: number){
    let cars = {
        manufacturer,
        model,
    }
return cars
}
let car1 = cars_info("Hyundai Sonata", 2020);
console.log(car1)

function carsInfo(manufacturer: string, model: number) {
    let car = {
      manufacturer,
      model,
    };
    return car;
  }
  const carData = cars_info("Kia Spotage", 2017);
  console.log(carData);
  //..........//..........//..............//.............//..........//..............//............//
                 //ASSIGNMENT COMPLETE//









