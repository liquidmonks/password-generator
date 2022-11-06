//This strong password generator shall allow a user to generate a password between 8-128 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case). 


// Global Variables

// This is my database: numbers, lowercase letters, uppercase letters, special characters
// * parameter array for numbers - let passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
// * parameter array for lowercase letters - let passwordLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,
// * parameter array for uppercase letters - let passwordUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// * parameter array for Special Characters - let passwordSpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Assignment Code
let generateBtn = document.querySelector("#generate");


// Creates a password object:
let passwordParameter = {

  // Sets property:value for password length:
  passwordLength: 0,

  // TODO: add property:value arrays for password numbers 0 - 9 (passwordNumbers)
  // use - let passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];,

  // Sausage casing array that holds password numbers parameter:
  passwordNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // TODO: add property:value arrays for password special characters (passwordSpecialChars)
  // use - let passwordSpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];,

  // TODO: add property:value arrays for password alphabet lower characters (passwordLowerChars),
  // use - let passwordLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];,

  // TODO: add property:value arrays for password alphabet upper characters (passwordUpperChars)
  // user - let passwordUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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
  let passwordResult = "";

  // Password variable that records an input from the user:
  let passwordLength = 0;

  // TODO: add the following user prompt - "let numbers;""
  let numbers;

  // TODO: add the following user prompt - "let upperCase;""
  // TODO: add the following user prompt - "let lowerCase;""
  // TODO: add the following user prompt - "let specialChars;""


  // Load characters:
  passwordLength = 0;
  passwordParameter.passwordLength = 0;
  passwordResult = "";

  // Quality control test for password parameters: 
  // TODO: add all the while, if, else, and return statement for each parameter condition
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Choose a password length between 8 and 128 characters");

    // TODO: add an if statement if user cancels prompt, then return a confirmation statement
    if (passwordLength === null) {
      return "Your strong password";
    }
    else {
      // validates that user has entered an integer
      if (!isFinite(passwordLength)) {
        alert("Please enter a number")
        return "Your strong password";
      }
      else {
        //       validates password meets length parameter
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password length shall be between 8 and 128 characters.");
          return "Your strong password";
        }
        else {
          //         calls sausage making function to display prompts for the parameters
          showPrompts();

          //         continues to add parameters until passwordLength = user entered value
          while (passwordParameter.passwordLength < passwordLength) {
            //           if statement validates user enter a minimum of one parameter
            if (numbers = false) {
              alert("You have selected to include numbers")
              showPrompts();
            }

            //           if user selects number, the generator pulls a random number for the array and updates passwordLength by 1
            if (numbers === true && passwordParamater.passwordLength < passwordLength) {
              let num = passwordParameter.passwordNumbers[Math.floor(Math.random() * 10)]
              passwordResult = passwordResults + num;
              passwordParameter.passwordLength++;


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
    //  TODO: add - "return passwordResult;""
    return passwordResult;


    // Sausage making process functions that displays user parameter selection prompts;
    // TODO: add function to show user prompts - use function showPrompts() {........} and confirm

    function showPrompts() {
      numbers = confirm("Do you want to include numbers in your password?")
    }
  }
}
