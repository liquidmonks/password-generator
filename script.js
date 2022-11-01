//This password generator shall allow a user to generate a password between 8-50 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Parameter Arrays
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]; // array lists all available numerical values


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
