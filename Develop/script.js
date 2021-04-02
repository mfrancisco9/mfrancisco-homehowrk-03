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
  var numberChars = "1234567890";
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


  if ((uppercase === true) && (lowercase === true) && (special === true)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length))
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    for(var i, i = 0; i < (length - 4); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === true) && (lowercase === true) && (special === false)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length))
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    for(var i, i = 0; i < (length - 3); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);  

  }
  if ((uppercase === true) && (lowercase === false) && (special === true)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length))
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    for(var i, i = 0; i < (length - 3); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === true) && (lowercase === false) && (special === false)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    for(var i, i = 0; i < (length - 2); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === false) && (lowercase === true) && (special === true)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    for(var i, i = 0; i < (length - 3); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === false) && (lowercase === true) && (special === false)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));    
    for(var i, i = 0; i < (length - 2); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === false) && (lowercase === false) && (special === true)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    for(var i, i = 0; i < (length - 2); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }

  if ((uppercase === false) && (lowercase === false) && (special === false)){
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    for(var i, i = 0; i < (length - 1); i++){
      password += selectedString.charAt(Math.floor(Math.random() * selectedString.length))
    }
    document.getElementById("password").setAttribute("placeholder", password)
    console.log(password);
  }




  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  ;


