/*const game = {
    title: "Donkey Kong country",
    platform: "SNES",
    year: "1994"
};
*/
//let title = game.title;
//let platform = game.platform;
//let year = game.year;

// Object Destructuring - with object destructuring you can do the above 3 lines within a single line

//let {title, platform, year} = game;

//console.log(title, platform, year);

/*let age = 20;

let voteable;

if (age < 18) {voteable = "Too young";}
    else {voteable = "Old enough";}

console.log(voteable);
*/

let myName = "Suzanne"; //declaring a variable myName and assigning the value "Suzanne" which is a string.

function getRandomCharacter(myName) {  //declaring a function with the parameter 'myName'
  let randomLetter = Math.floor(Math.random() * myName.length); // This declares a variable randomLetter and assigns
  //it a random integer between 0 and the length of myName (exclusive) using Math.random() and Math.floor() functions. 
  //This line generates a random index within the range of the string's length.
  let randomCharacter = myName[randomLetter]; //This declares a variable randomCharacter and assigns it the character 
  //in myName at the index randomLetter. This line selects a random character from the string myName using the random 
  //index generated in the previous step.
  return randomCharacter; // this will return a random character selected from 'myName'
}


console.log(getRandomCharacter(myName)); 
 //This calls the 'getRandomCharacter' function with 'myName' as an argument and logs the result 
 //(a random character selected from 'myName') to the console