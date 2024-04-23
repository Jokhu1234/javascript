let heading = "Large Dog Breeds";
//let heading = "Small Dog Breeds";
let dogBreeds = ["Golden Retriever", "German Sheppard", "Great Dane", "Doberman", "Australian Shepherd", "Labrador Retriever", "Bernese Mountain Dog", 
"St. Bernard","Alaskan Malamute", "Rottweiler", "Bullmastiff", "Boxer"];
//let dogBreeds = ["Pomeranian", "Boston Terrier", "Yorkshire Terrier", "Maltese", "Chihuahua", "Shih Tzu", "Dachshund", "Beagle", "Miniature Poodle", 
//"West Highland White Terrier","Pug"];

let myListHeading = `List of ${heading}`;

let html = `<h1>${myListHeading}</h1> <ul> `;

for (const x in dogBreeds) {
  html += `<li>${dogBreeds[x]}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;

/*var flavors = ["vanilla", "chocolate", "strawberry", "cookies and cream", "pink bubblegum"];
  var flavorOfTheDay = flavors[4];

*/
//ForLoop
/*let text = "";

for (let t = 2; t <= 5; t++) {
  for (let i = 1; i < 10; i++) {
    text += t + " * " + i + " = " + t * i "<br>";
    //console.log(t + " * " + i + " = " + t * i);
}
/*
let text = "Suzanne" + " " + " ";

for (let i = 1; i < 10; i++) {
  text += text + "<br>";

  }
*/
/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
//text += cars[0]
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

document.getElementById("loop-demo").innerHTML = cars[0];
document.getElementById("loop-demo").innerHTML = cars[1];
document.getElementById("loop-demo").innerHTML = cars[2];
document.getElementById("loop-demo").innerHTML = cars[3];
*/
/*
  document.getElementById("loop-demo").innerHTML = text;
//Switch Statement
/*switch (expression) {
    case x:
      //code block
      break;
    case y:
      //code block
      break;
    default:
        // code block
}
*/
/*
const time = new Date().getHours();
let greeting;

switch (time)
{
    case 11:
        greeting = "Good Morning";
        break;

        case 12:
        greeting = "Good Afternoon";
        break;
    default:
        greeting = "Good Evening";
        break;
   
}

document.getElementById("time-demo").innerHTML = greeting;
*/
/*
let day;

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

document.getElementById("switch-demo").innerHTML = "Today is " + day; 

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is the Weekend!";
        break;
    case 0:
    case 6:
        text = "It is the Weekend!";
        break;
    default:
        text = "Can't wait for the Weekend!";
}
document.getElementById("switch-demo").innerHTML = text;
*/
/*
if ()
{

}
else{}

if ()
{

}
*/
//Conditional Statements
/*
if
else
else if
switch
*/
/*
let a = 10;
let b = 15;

if (b > a){
    document.getElementById("cs-demo").innerHTML = "integer b is greater";
}
else {
    document.getElementById("cs-demo").innerHTML = "integer a is greater";
}
*/
/*
const time = new Date().getHours();
document.getElementById("log").innerHTML = time;
let greeting;

if (time < 12) {
   greeting = "Good Morning";
   document.getElementById("log").innerHTML = greeting;
} else if (time == 12) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

document.getElementById("time-demo").innerHTML = greeting;
*/
/*let testTime = new Date();

console.log(testTime);
console.log(time);

*/


//Temperature Converter
//Celcius to Farenheit = C - F = (C*1.8)+32
//Fahrenheit to Celcius = F - C =(F - 32) /1.8

//
/*
let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
let celsius = (fahrenheit - 32) * 5/9;
console.log(`The temperature in Celsius is ${celsius.toFixed(2)}`);
//

//

function toCelsius ()
{
    return (5 /9) * (f - 32);
}

myCelsius =toCelsius(99);

document.getElementById("demo").innerHTML = myCelsius;

console.log(myCelsius);


var message ="Howdy" + "" + "partner";
console.log(message);

//


function msgChange(user)
{

    document.getElementById("myGreeting").innerHTML = "Welcome "+ user;
}

function changeCourse(myCourseName) {
    document.getElementById("myLearning").innerHTML = "Learning "+ myCourseName;
}

console.log(result);

//Functions
function add(a , b) {
return a + b;
}

result = add(2,6);
console.log(result);

result = add(6,12);
console.log(result);

//Functions Multiply
function Multiply() {

}



//Functions Subtract



//Functions Divide

function Divide(a,b) {
    return a / b;
}

//Object Data Type
//key:value pairs

let person = {firstName:"Suzanne", latName:"Jokhu", phone:"4166066621", email:"sjokhu25@gmail.com"};
console.log(person.email);
console.log(person.phone);

//Arrays---data structure */