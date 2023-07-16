// Assignment code here


var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = buildPWD();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//set retry counters
var lengthRetry = 1
var charRetry = 1


//Function to collect password lenght - returns number of characters - retry if not entered correctly
function pwdLengthCollect() {
  var pwdLength = prompt("Password length(greater than 7)?")

//Verify input was valid
  if (pwdLength < 8 && lengthRetry <=4 || pwdLength > 128 && lengthRetry <= 4) {
    lengthRetry++
    pwdLengthCollect()
  }
  if (lengthRetry > 4) {
    lengthRetry = 0
    alert("You have exceeded the number of retries, reload the page.")
    return
  }

  return pwdLength

}



//Function to create character sets - returns character set to use - retry if not entered correctly
function pwdCharSetBuild() {

  //Character Sets
  const specialChr = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  const upperChr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerChr = "abcdefghijklmnopqrstuvwxyz"
  const numeric = "0123456789"

  var usespecialChr = confirm("Use special characters?- Yes(OK) or No(Cancel)")
  var useupperChr = confirm("Use upper case letters?-- Yes(OK) or No(Cancel)")
  var uselowerChr = confirm("Use lower case letters?-- Yes(OK) or No(Cancel)")
  var useNumeric = confirm("Use numbers?-- Yes(OK) or No(Cancel)")
  var pwdCharSet = ""
  

  // if statments to build characters sets in var pwdCharset used.  Each option will skip or add to the character set.
  if (usespecialChr === true) {
    var pwdCharSet = pwdCharSet + specialChr
  }

  if (useupperChr === true) {
    var pwdCharSet = pwdCharSet + upperChr
  }

  if (useNumeric === true) {
    var pwdCharSet = pwdCharSet + numeric
  }

  if (uselowerChr === true) {
    var pwdCharSet = pwdCharSet + lowerChr
  }

  //Verify input was sucessful and retry if needed
  if (pwdCharSet == "" && charRetry <= 4) {
    alert("You must select at least one character set, please try again")
    charRetry++
    pwdCharSetBuild()
  }

  if (charRetry > 4) {
    charRetry = 0
    alert("You have exceeded the number of retries, reload the page.")
    return
  }

  return pwdCharSet

}

//Build Password with collected info when button pushed

function buildPWD() {

  var lenght = pwdLengthCollect();
  var characters = pwdCharSetBuild();

  var pwd = ""
  for (var i = 0; i < lenght; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return pwd;
}

