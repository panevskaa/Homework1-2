// 1. The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


var numberOfChildren = 3;
var partnersName = "Darko";
var geographicLocation = "Skopje";
var jobTitle = "Audit ";

console.log("You will be " + jobTitle + "in " + geographicLocation + " and married to " + partnersName + " with " + numberOfChildren +" kids ");


// 2. The Age Calculator
// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.


var birthYear = 2001;
var futureYear = 2032;
var futureAge = 0;
var birthMonth = 3;
var futureMonth = 5;
var resMonth = 0;
var temp1 = 0;
var result = 0;


futureAge = futureYear - birthYear;
console.log(futureAge);
resMonth = birthMonth - futureMonth;
console.log(resMonth);
temp1 =(futureAge * 12) + resMonth;
result = temp1 / 12;
parseInt()
console.log(result);

console.log("I will be either " + futureAge + " or " + result + " in " + futureYear);


// 3. The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


var myAge = 22;
var maxAge = 60;
var snack = 500;
var res = 0;


res = ((maxAge - myAge) * 365) * snack;
console.log("You will need " + res  + " MKD to last you until the ripe old age of " + maxAge);

// 4. The Geometrizer
// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".



var radius = 5;
var pi = 3.14;
var circumference = 2 * pi * radius;
var area = pi * (radius*radius);

console.log("The circumference is " + circumference);
console.log("The area is " + area);


// 5. The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 36;
var fahrenheit = celsius * 33.8;
console.log(celsius + "°C" + " is " + fahrenheit + "°F ");

var F = 400;
var C= F/ 33.8;
console.log(F + "°F" + " is " + C + "°C ")















