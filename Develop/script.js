// Assignment Code

// var length = prompt("Length of password:");
//   while ((length < 8) || (length >= 128)) {
//       length = prompt("Length of password must be between 8 and 128 characters");
//   }
//   var uppercase = confirm("Include uppercase characters?");
//   var lowercase = confirm("Include lowercase characters?");
//   var special = confirm("Include special characters?");
  
//Instead of predefining the string for the user to draw random characters from, I wish to build the string for the user to draw depending on 
//the values of uppercase, lowercase, special
//var uppercaseChars = "ABCDEFG"
//var selecetedString = "";
/*if (uppercase){
  selectedString += uppercaseChars;  
}*/


//End: selectedString contains all character we wish to draw from. 
//Then use the math.random function to draw a random char from selectedString and do it length number of times


var generateBtn = document.querySelector("#generate");



function generatePassword() {
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
  var length = prompt("Length of password:");
  while ((length < 8) || (length >= 128)) {
      length = prompt("Length of password must be between 8 and 128 characters");
  }
  var uppercase = confirm("Include uppercase characters?");
  var lowercase = confirm("Include lowercase characters?");
  var special = confirm("Include special characters?");
  var selectedString = "1234567890";
  var uppercaseChars = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()_+-="
  

  if (uppercase === true) {
    selectedString += uppercaseChars;
  }
  if (lowercase === true) {
    selectedString += lowercaseChars;
  }
  if (special === true) {
    selectedString += specialChars
  } 
 
  var password = "";

  
  for(var i, i = 0; i < length; i++){
    password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
  }
  document.getElementById("password").setAttribute("placeholder", password)
  console.log(password);

  }

  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  ;

  
