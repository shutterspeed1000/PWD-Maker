// Assignment code here

//Character Sets
//var specialChr = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const specialChr = "!@@$"
const upperChr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChr = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789"



// prompt user for password lenght and character types
var pwdLength = prompt("Password length?")

//Function to create character sets
function pwdParameters(){
var usespecialChr = prompt("Use special characters?- Yes or No")
var useupperChr = prompt("Use upper case letters?-- Yes or No")
var uselowerChr = prompt("Use lower case letters?-- Yes or No")
var useNumeric = prompt("Use numbers?-- Yes or No")
var pwdCharSet = ""

// if statments to build characters sets in var pwdCharset used.  Each option will skip or add to the character set.
if (usespecialChr == "Yes" || usespecialChr == "yes" || usespecialChr == "y" || usespecialChr == "Y") {
  var pwdCharSet = pwdCharSet + specialChr
}

if (useupperChr === "Yes" || useupperChr === "yes" || useupperChr === "y" || useupperChr === "Y") {
  var pwdCharSet = pwdCharSet + upperChr
}

if (useNumeric === "Yes" || useNumeric === "yes" || useNumeric === "y" || useNumeric === "Y") {
  var pwdCharSet = pwdCharSet + numeric
}

if (uselowerChr === "Yes" || uselowerChr === "yes" || uselowerChr === "y" || uselowerChr === "Y") {
  var pwdCharSet = pwdCharSet + lowerChr
}

return pwdCharSet

}

pwdcharacters = pwdParameters()

//Verify inputs were made and retry if needed
if (pwdcharacters === "" )
{
  alert("You must select one character type, please try again")
  pwdParameters()
}










console.log('Characters uses ' + pwdcharacters);



//build loop for select letters from var based on lenght.

// lowerChr.forEach(letter);








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// // quick way
// students.forEach(student => console.log(`Welcome ${student}`))


// lowerChr.forEach(letter); {

//  console.log(letter);
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page