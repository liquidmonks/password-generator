//This password generator shall allow a user to generate a password between 8-50 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 
// Global Variables

// This is my database: numbers, special characters, lowercase letters, uppercase letters
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // create a number array with elements (numbers) 0-9
let passwordLength = 5;
let randomInt = getRandomArbitrary(10);
console.log(randomInt);
let password = number[randomInt];

// Assignment Code
let generateBtn = document.querySelector("#generate");


// This function will generate the password and return it to the correct password
function generatePassword() {
  // Create a password using random numbers as long as the length
  return password; //predefined password
}

// 
function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max); // generates random 
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
