//This password generator shall allow a user to generate a password between 8-50 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 
// Global Variables

// This is my database: numbers, special characters, lowercase letters, uppercase letters
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // create a number array with elements (numbers) 0-9
let passwordLength = 5;
let randomInt = getRandomArbitrary(10);
console.log(randomInt);
let password = number[randomInt];

// Sets criteria for password (object):

let passwordCriteria = {

  //Sets property:value for password length:
  passwordLength: 0

  //TODO: add property:value for password Numbers
  //TODO: add property:value for password specialCharacters
  //TODO: add property:value for password alphaLower
  //TODO: add property:value for password alphaUpper



}



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

// Write password to the #password input of index.html file
function writePassword() {
  let password = generatePassword();

  // Sets ID of the password writting passwordText = to the textArea in index.html file
  let passwordText = document.querySelector("#password");
  // Updates the textArea with a new password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
