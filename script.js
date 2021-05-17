// Assignment code here
var upCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowCase = "qwertyuiopasdfghjklzxcvbnm";
var numbCase = "0123456789";
var spclCase = "!@#$%^&*()-=+/.,<>[]|`?";
var results = "";


// varibles with prompts for passwords lengths and confirmations
var passwLength
var upConfirm
var lowConfirm
var numbConfirm
var spclConfirm

console.log(results);

function generatePassword(){
   var password = "";
   for(i=1; i<= passwLength; i++){
    var randomPass = Math.floor(Math.random() * results.length);
    password += results[randomPass];
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwLength = window.prompt("how long is this password?");
  if(passwLength > 128 || passwLength < 8){
    alert("Password cannot be less than 8 characters or greater than 128 characters. Please refresh the page and try again");
  }

  upConfirm = confirm("Would you like your password to contain upper case characters?");
  if(upConfirm){
    results += upCase;
  }

  lowConfirm = confirm("would you like your password to contain lower case characters?");
  if(lowConfirm){
    results += lowCase;
  }

  numbConfirm = confirm("Would you like numbers in your password?");
  if(numbConfirm){
    results += numbCase;
  }

  spclConfirm = confirm("Would you like Special characters?");
  if(spclConfirm) {
    results += spclCase;
  }

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
