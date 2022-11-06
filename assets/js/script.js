//This strong password generator shall allow a user to generate a password between 8-128 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 

// Assignment Code
let generateBtn = document.querySelector("#generate");


// Global Variables

// This is my database: numbers, lowercase letters, uppercase letters, special characters
// parameter array for numbers - let passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
// parameter array for lowercase letters - let passwordLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,
// parameter array for uppercase letters - let passwordUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// parameter array for Special Characters - let passwordSpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Creates a password object:

let passwordParameter = {

  // Sets property:value for password length:
  passwordLength: 0,

  // TODO: add property:value arrays for password numbers 0 - 9 (passwordNumbers)
  // use - let passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];,

  // Sausage casing array that holds numbers parameter:
  passwordNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // TODO: add property:value arrays for password special characters (passwordSpecialChars)
  // use - let passwordSpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];,

  // TODO: add property:value arrays for password alphabet lower characters (passwordLowerChars),
  // use - let passwordLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,

  // TODO: add property:value arrays for password alphabet upper characters (passwordUpperChars)
  // user - let passwordUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}


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


  // Sets ID of the password writing passwordText = to the textArea in index.html file
  let passwordText = document.querySelector("#password");


  // Updates the textArea with a new password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function where the sausage is made to generate a new password
function generatePassword() {

  // Sausage casing that temporarily holds the password the generator outputs to the user:
  let passwordResult = "";

  // Password parameter selection prompts that records input from the user:

  let passwordLength = 0;
  // TODO: add the following user prompt - "let numbers;""
  let numbers;
  // TODO: add the following user prompt - "let upperCase;""
  // TODO: add the following user prompt - "let lowerCase;""
  // TODO: add the following user prompt - "let specialChars;""

}

// Load characters:
passwordLength = 0;
passwordParameter.passwordLength = 0;
result = "";

// Quality control test for password parameters: 
// TODO: add all the while, if, else, and return statement for each parameter condition


// Returns the password from the sausage casing back to the call function
//  TODO: add - "return result;""

// Sausage making process functions that displays user parameter selection prompts;
// TODO: add function to show user prompts - use function showPrompts() {........} and confirm