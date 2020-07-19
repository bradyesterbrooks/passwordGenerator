var generateBtn = document.querySelector("#generate");
var questions=['']
//write generatePassword functions

function generatePasswordLength() {
var passwordLength=prompt("How many characters long would you like your password to be?");
if (passwordLength<8){
    alert("Password needs to be at least 8 characters...");
    generatePasswordLength();
}
else if (passwordLength>128){
    alert("Password can be no more than 128 characters...");
}}

function characterTypes(){
    //let's see if they want lowercase letters
    var response1=prompt("Would you like lowercase letters in your password? 'yes' or 'no'..."); 
    if (response1=='yes' | response1=='Yes'){
        var lowletters=1;
    }
    else {
        lowletters=0;
    }

    //let's see if they want uppercase letters
    var response2=prompt("Would you like UPPERCASE letters in your password? 'yes' or 'no'..."); 
    if (response2=='yes' | response2=='Yes'){
        var upletters=1;
    }
    else {
        upletters=0;
    }

    //let's see if they want numbers
    var response3=prompt("Would you like numbers 1-9 in your password? 'yes' or 'no'..."); 
    if (response3=='yes' | response3=='Yes'){
        var numbers=1;
    }
    else {
        numbers=0;
    }

    //finally do they want special characters?
    var response4=prompt("Would you like special characters such as $, *, @, # in your password? 'yes' or 'no'..."); 
    if (response4=='yes' | response4=='Yes'){
        var specials=1;
    }
    else {
        specials=0;
    }

}

// Write password to the #password input
function writePassword() {
  generatePasswordLength();
  characterTypes();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
