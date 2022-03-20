// Assignment code here
window.alert("This site will generate a random password for you");

window.alert("This will be a strong  password that will provide you with greater security");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword fuction
function generatePassword() {
  var Uppercase = window.prompt("Would you like to use an upper case password?  Yes or No?");
  var SpecialCharacter = window.prompt("Would you like for your password to contain any special characters?  Yes or No?");
  var passwordsLength = window.prompt("How many characters would you like your password to contain? It must have at least 8 chacters to be secure and no more then 128");
  console.log(Uppercase);
  console.log(SpecialCharacter);
  console.log(passwordLength);

  //validate Uppercase
  //if (var Uppercase == Yes || Uppercase == yes || Uppercase == Y || Uppercase == y || Uppercase == YES);

  //if (SpecialCharacter == Yes || SpecialCharacter == yes || SpecialCharacter == y || SpecialCharacter == YES);

if (passwordsLength <= 7) {
  window.alert("Your password is too short.  Please try again")
}
else {}

if (passwordsLength >= 129) {
  window.alert("Your password is too long.  Please try again")
}
else {}

//generate a random password
//var randomNumber = function(min,max) {
  //var value = Math.floor(Math.random()) * (min-max);
 // return value
//}

}
