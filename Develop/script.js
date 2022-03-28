// Assignment code here
window.alert("This site will generate a random password for you");

window.alert("This will be a strong  password that will provide you with greater security");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// establish variables //
var numberLength = 8;
var characters = [];
var lowerCase = [
  "a","b","c","d", "e","f", "g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "X","Y","z",
];

var upperCase = [
  "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",
];

var specialSymbol = ["!", "@", "#", "$", "%", "*", "&"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Functions to alert user
function alertUser() {
  characters = [];

  numberLength = parseInt(
    prompt("Select a number between 8 to 128 for password length")
  );
  if (isNaN(numberLength) || numberLength < 8 || numberLength > 128) {
    alert("Select a number between 8 to 128 for password length");
    return false;
  }

  // Prompt user to select if they would like lowercase, uppercase, numbers, special characters in password
  if (confirm("Do you want a lowercase letter in your password?")) {
    characters = characters.concat(lowerCase);
  }

  if (confirm("Do you want a uppercase letter in your password?")) {
    characters = characters.concat(upperCase);
  }

  if (confirm("Do you want a special character in your password?")) {
    characters = characters.concat(specialSymbol);
  }
  if (confirm("Do you want numbers in your password?")) {
    characters = characters.concat(numbers);
  }
  return true;
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < numberLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password = password + characters[randomNumber];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var createAlerts = alertUser();
  var passwordText = document.querySelector("#password");
  if (createAlerts) {
    var getPassword = generatePassword();
    passwordText.value = getPassword;
  } else {
    passwordText.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //validate Uppercase
  //if (var Uppercase == Yes || Uppercase == yes || Uppercase == Y || Uppercase == y || Uppercase == YES);

  //if (SpecialCharacter == Yes || SpecialCharacter == yes || SpecialCharacter == y || SpecialCharacter == YES);

if (numberLength <= 7) {
  window.alert("Your password is too short.  Please try again")
}
else {}

if (numberLength >= 129) {
  window.alert("Your password is too long.  Please try again")
}
else {}

//generate a random password
//var randomNumber = function(min,max) {
  //var value = Math.floor(Math.random()) * (min-max);
 // return value
//}


