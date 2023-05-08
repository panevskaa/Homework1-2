// 1. Get the user's input using a prompt which 
// asks “Enter your age". If the user is 18 or older , 
// give feedback: 'You are old enough to drive' but if 
// not 18 give another feedback stating to wait for 
// the number of years he needs to turn 18. Parse the 
// input of the user from a string, into a number using 
// parseInt().

var age = prompt("Enter your age");
console.log(age);
if(age>=18){
    console.log("You are old enough to drive");
}else if(age<18){
    console.log("You need to turn 18!");
}
var temp = parseInt(age);
console.log(typeof temp);

// 2. Write a program which tells the number of days in a 
// month. For example: if the variable value is February, 
// the output in the console would be: February has 28 days.

  var mesec = "fevruari";

  if(mesec == "januari"){
    console.log(31);
  }else if(mesec == "fevruari"){
    console.log(28);
  }else if(mesec == "mart"){
    console.log(31);
  }else if(mesec == "april"){
    console.log(30);
  }else if(mesec == "maj"){
    console.log(31);
  }else if(mesec == "juni"){
    console.log(30);
  }else if(mesec == "juli"){
    console.log(31);
  }else if(mesec == "avgust"){
    console.log(31);
  }else if(mesec == "septemvri"){
    console.log(30);
  }else if(mesec == "oktomvri"){
    console.log(31);
  }else if(mesec == "noemvri"){
    console.log(30);
  } else {
    console.log(mesec == "dekemvri");
  }


// 3.   Write a program that outputs in the console 
//   what kind of a band is playing music based 
//   on the number of musicians. For example: if 
//   the variable value is 4, the output in the 
//   console would be: The band is a quartet.

var bandNumber=1;

if(bandNumber == 1){
    console.log("The band is solo.")
}else if(bandNumber ==2){
    console.log("The band is duo.")
}else if(bandNumber ==3){
    console.log("The band is trio.")
}



// 4. Write a switch statement to set the average salary of a person based on their type of completed education. 
// The salary would be a variable. The higher the value of the variable (salary), the higher the diploma/degree.
// no high school diploma
// a high school diploma
// an Associate's degree
// a Bachelor's degree
// a Master's degree
// a Professional degree
// a Doctoral degree


var salary = 45633;
if((salary >= 21000) && (salary <= 29999) ){
    console.log("no high school diploma");
}else if((salary >= 30000) && (salary <= 39999)){
    console.log("a high school diploma");
}else if((salary >= 40000) && (salary <= 49999)){
    console.log("an Associate's degree");
}else if((salary >= 50000) && (salary <= 69999)){
    console.log("a Bachelor's degree");
}else if((salary >= 70000) && (salary <= 79999)){
    console.log("a Master's degree");
}else if((salary >= 80000) && (salary <= 99999)){
    console.log("a Professional degree");
}else if(salary >= 100000){
    console.log("a Doctoral degree");
}