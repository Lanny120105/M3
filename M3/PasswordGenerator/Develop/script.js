// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function randomInt(min, max) {
return Math.floor(Math.random()*(max - min) + min)
}
function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

//Define generate password

function generatePassword() {
while (true){
  var userInput = window.prompt(" Do you want to Create Password that is 8 and 128 characters?")

 if (userInput === null) {
  return 
 }

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Not a Number!")
  } else if (passwordLength <8 || passwordLength > 128) {
  window.alert("Length must be between 8 and 128 characters")
} else {
  break
}

}

var userNumbers = window.confirm("Include numbers?") 
var userSymbols = window.confirm("Include Symbols?") 
var userLowercase = window.confirm("Include Lowercase?") 
var userUppercase = window.confirm("Include Uppercase?") 

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9"]
var SymbolsList = [ "!", "@", "#", "$", "%", "^", "&","*", "(", ")"]
var LowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var UppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var choices = []
 
if (userNumbers === true) {
  choices.push(numberList)
 }

 if (userSymbols === true) {
  choices.push(SymbolsList)
 }

 if (userLowercase === true) {
  choices.push(LowercaseList)
 }

 if (userUppercase === true) {
  choices.push(UppercaseList)
 }

 if (choices.length === 0) {
  choices.push(LowercaseList)
 }

 var generatedPassword = ""

 for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(choices)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
 }

 return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Being called but is not defined
  var passwordText = document.querySelector("#password");

  if (!password) {
    return
  }

  if (password) {
    passwordText.value = password;
  }
  passwordText.value = password; // value needs to be returned

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

