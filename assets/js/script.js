//This secure password generator shall allow a user to generate a password between 8-128 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 


// Global Variables

// This is my database: numbers, lowercase letters, uppercase letters, special characters
// * parameter array for numbers - let passNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
// * parameter array for lowercase letters - let passLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,
// * parameter array for uppercase letters - let passUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// * parameter array for Special Characters - let passSpecialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Creates a password object:
let passParameter = {

  // Sets property:value for password length:
  passLength: 0,


  // Sausage casing array that holds password numbers parameter:
  passNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  // TODO: add property:value arrays for password special characters (passSpecialChar)
  // use - let passSpecialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];,

  // TODO: add property:value arrays for password alphabet lower characters (passLowerChar),
  // use - let passdLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,

  // TODO: add property:value arrays for password alphabet upper characters (passdUpperChar)
  // user - let passUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

}

// Write password to the #password input of index.html file
function writePassword() {
  // Calls the generatePassword function
  let password = generatePassword();

  // Sets ID of the password writing passwordText = to the textArea in index.html file
  let passwordText = document.querySelector("#password");

  // Updates the textArea with a new password
  passwordText.value = password;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function where the sausage is made to generate a new password
function generatePassword() {

  // Sausage casing that temporarily holds the password the generator outputs to the user:
  let passResult = "";

  // Password variable that records an input from the user:
  let passwordLength = 0;

  // TODO: add the following user prompt - "let numbers;""
  let numbers;

  // TODO: add the following user prompt - "let upperCase;""
  // TODO: add the following user prompt - "let lowerCase;""
  // TODO: add the following user prompt - "let specialChar;""


  //initialize characters
  passwordLength = 0;
  passParameter.passLength = 0;
  passResult = "";

  // Quality control test for password parameters: 
  // TODO: add all the while, if, else, and return statement for each parameter condition
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    // TODO: add an if statement if user cancels prompt, then return a confirmation statement
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      // validates that user has entered an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        //       validates password meets length parameter
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          //call the internal function to show prompts for criteria
          showPrompts();

          //         continues to add parameters until passwordLength = user entered value
          while (passParameter.passLength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria  
            if (numbers === false) {
              alert("You have selected numbers")
              showPrompts();
            }

            //if the user selected a number and there is still room to add characters then
            //randomly grab a number from the array and add it to the end of passResult 
            //update passLength by 1
            if (numbers === true && passParameter.passLength < passwordLength) {
              let num = passParameter.passNumber[Math.floor(Math.random() * 10)]
              passResult = passResult + num;
              passParameter.passLength++;

              // TODO: add an else/if statement that validates whether the user enters a number, then return a confirmation statement

              // TODO: add an else if statement that validates password length criteria, then return a confirmation statement

              // TODO: add an else statement that calls the sausage making function to display prompts for the password parameters (showPrompts())

              // TODO: add while statement that continues to add characters until it meets the user password length selection

              // TODO: add an if statement to ensure user selects a minimum of one parameter (from parameter variable set), then alert and show prompts

              // TODO: add an else statement where generator adds an extra character if the user selects a lower case parameter

              // TODO: add an let statement where the program does math and concat passwordParameter + passwordLength

              // TODO: add an if statement where generator adds an extra character if the user selects an upper case parameter

              // TODO: add a let declaration statement where the program does math and concat passwordParameter + passwordLength

              // TODO: add an if statement where generator adds an extra character if the user selects a special character parameter

              // TODO: add a let declaration statement where program does math and contact passwordParameter + passwordLength

              // TODO: add an if statement where generator adds an extra character if the user selects a number parameter

              // TODO: add a let declaration statement where program does math and contact passwordParameter + passwordLength
            }
          }
        }
      }
    }

    // Returns the password from the sausage casing back to the call function
    //  TODO: add - "return passResult;""
    //return the generated password back to the calling function
    return passResult;

    // Sausage making process functions that displays user parameter selection prompts;
    // TODO: add function to show user prompts - use function showPrompts() {........} and confirm
    function showPrompts() {
      numbers = confirm("Do you want to include numbers?");
    }
  }
}