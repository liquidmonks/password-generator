//This secure password generator shall allow a user to generate a password between 8-128 characters with a minimum of one predefined parameters (i.e. numerical length, special characters, and/or letter case).

// Assignment Code
let generateBtn = document.querySelector("#generate");

// This section creates a password object:
let passParameter = {
  passLength: 0, // Sets property:value for password length:

  // Global Variables
  // This is my database: numbers, lowercase letters, uppercase letters, special characters

  // Sausage casing array that holds password numbers parameter:
  arrayNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // Array holds numbers values

  // Sausage casing array that holds password special characters parameter:
  arraySpecialChar: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"], // Array holds 13 special characters values]

  // TODO: uncomment the following - arrayLowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 26 characters,

  // TODO: uncomment the following - arrayUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // 26 characters;
};

// This function writes a password to the #password input of index.html file
function writePassword() {
  // Calls the generatePassword function
  let password = generatePassword();

  // Locates the password input field in from the textArea in index.html file
  let passwordText = document.querySelector("#password");

  // Updates the textArea with a value = to the new password
  passwordText.value = password;
}

// Adds event listener to monitor when the user clicks the "Generate Password" button
generateBtn.addEventListener("click", writePassword);

// This is the Function where the sausage is made. It passes through to generate a new password
function generatePassword() {
  // This is the sausage casing that temporarily holds the password the generator outputs to the user:
  let passResult = "";

  // These is the password variables that records a response from the user:
  let passwordLength = 0;
  let numbers;
  let specialChar;
  // TODO: uncomment the following - let upperCase;
  // TODO: uncomment the following - let lowerCase;

  //initialize characters
  passwordLength = 0;
  passParameter.passLength = 0;
  passResult = "";

  // Quality control test for password parameters:

  while (passwordLength < 8 || passwordLength > 128) {
    // This validates the length of the password
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    if (passwordLength === null) {
      // This returns a confirmation statement if the user chooses to cancel a choice selection option
      return "Your secure password";
    } else {
      // validates that user has entered an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      } else {
        //       validates password meets length parameter
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        } else {
          //call the internal function to show prompts for criteria
          showPrompts();

          //         continues to add parameters until passwordLength = user entered value
          while (passParameter.passLength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria
            if (numbers === false && specialChar === false /*lowerCase === false && upperCase === false*/) {
              alert("Please select at least one parameter of numbers or special characters");
              showPrompts();
            } else {
              /*if the user selected a number and there is still room to add characters then
              randomly grab a number from the array and add it to the end of passResult
              update passLength by 1*/
              if (numbers === true && passParameter.passLength < passwordLength) {
                let num = passParameter.arrayNumber[Math.floor(Math.random() * 10)];
                passResult = passResult + num;
                passParameter.passLength++; // ++ adds 1
              }

              /*if the user selected a special character and there is still room to add characters then
              randomly grab a special character from the array and add it to the end of passResult
              update passLength by 1*/
              if (specialChar === true && passParameter.passLength < passwordLength) {
                let special = passParameter.arraySpecialChar[Math.floor(Math.random() * 13)]; // 13 is the number of special characters available
                passResult = passResult + special;
                passParameter.passLength++; // ++ adds 1
              }

              /* TODO: uncomment the following - 

              if the user selected a lower case character and there is still room to add characters then
              randomly grab a lower case character from the array and add it to the end of passResult
              update passLength by 1
              if (lowerCase === true && passParameter.passLength < passwordLength) {
                let lower = passParameter.arrayLowerCase[Math.floor(Math.random() * 26)]; // 26 is the number of lower characters available
                passResult = passResult + lower;
                passParameter.passLength++; // ++ adds 1
              }
*/

              /* TODO: uncomment the following - 

              if the user selected a upper case character and there is still room to add characters then
              randomly grab a upper case character from the array and add it to the end of passResult
              update passLength by 1
              if (upperCase === true && passParameter.passLength < passwordLength) {
                let upper = passParameter.arrayUpperCase[Math.floor(Math.random() * 26)]; // 26 is the number of upper characters available
                passResult = passResult + upper;
                passParameter.passLength++; // ++ adds 1
              }
*/
            }
          }
        }
      }
    }

    // Returns the password from the sausage casing back to the call function
    return passResult; //return the generated password back to the calling function

    // Sausage making process functions that displays user parameter selection prompts;
    function showPrompts() {
      // Presents the user with the questions
      numbers = confirm("Do you want to include numbers?");
      specialChar = confirm("Do you want to include special characters?");
      // TODO: uncomment the following - lowerCase = confirm("Do you want to include lower case characters?");
      // TODO: uncomment the following - upperCase = confirm("Do you want to include upper case characters?");
    }
  }
}
