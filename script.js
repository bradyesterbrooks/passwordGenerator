var generateBtn = document.querySelector("#generate");
//var questions = ['']
var allLowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var allUppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var specCharOptions = ['!', '@', '#', '$', '*']
//write generatePassword functions



function characterTypes() {
    var counter = 0;
    //password length
    var X = prompt("How many characters long would you like your password to be?");
    passwordLength = parseInt(X);
    console.log(passwordLength);

    if (passwordLength == null) { return; }

    if (passwordLength < 8) {
        alert("Password needs to be at least 8 characters...");
        generatePasswordLength();

    }
    else if (passwordLength > 128) {
        alert("Password can be no more than 128 characters...");
        generatePasswordLength();
    }
    //let's see if they want lowercase letters
    var response1 = prompt("Would you like lowercase letters in your password? 'yes' or 'no'...");
    if (response1 == null) { return; }
    if (response1 == 'yes' | response1 == 'Yes') {
        var lowletters = 1;
        counter += 1;
    }
    else if (response1 == 'no' | response1 == 'No') {
        lowletters = 0;
    }


    //let's see if they want uppercase letters
    var response2 = prompt("Would you like UPPERCASE letters in your password? 'yes' or 'no'...");
    if (response2 == null) { return; }
    if (response2 == 'yes' | response2 == 'Yes') {
        var upletters = 1;
        counter += 1;
    }
    else if (response2 == 'no' | response2 == 'No') {
        upletters = 0;
    }


    //let's see if they want numbers
    var response3 = prompt("Would you like numbers 1-9 in your password? 'yes' or 'no'...");
    if (response3 == null) { return; }
    if (response3 == 'yes' | response3 == 'Yes') {
        var numbers = 1;
        counter += 1
    }
    else if (response3 == 'no' | response3 == 'No') {
        numbers = 0;
    }


    //finally do they want special characters?
    var response4 = prompt("Would you like special characters such as $, *, @, # in your password? 'yes' or 'no'...");
    if (response4 == null) { return; }
    if (response4 == 'yes' | response4 == 'Yes') {
        var specials = 1;
        counter += 1
    }
    else if (response4 == 'no' | response4 == 'No') {
        specials = 0;
    }

    if (counter < 1) {
        alert('You must select at least one password criteria');
        characterTypes();
    }
    else {
        var passwordArray = [];
        var specialArray = [];
        var numArray = [];
        var upperArray = [];
        var lowerArray = [];
        //special characters
        if (specials == 1) {
            for (var i = 0; i < 2; i++) {
                specialArray.push(specCharOptions[Math.floor(Math.random() * specCharOptions.length)]);

            } passwordArray = passwordArray.concat(specialArray);
            console.log(passwordArray);
        }
        //numerical characters
        if (numbers == 1) {
            for (var i = 0; i < 2; i++) {
                numArray.push(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
            } passwordArray = passwordArray.concat(numArray);
            console.log(passwordArray);

        }
        //upper letters
        if (upletters == 1) {
            for (var i = 0; i <2; i++) {
                upperArray.push(allUppers[Math.floor(Math.random() * allUppers.length)]);
            } passwordArray = passwordArray.concat(upperArray);
            console.log(passwordArray);
            var xxx=passwordArray.length;

        }
        //lower letters
        if (lowletters == 1) {
            for (var i = 0; i < (passwordLength-xxx); i++) {
                lowerArray.push(allLowers[Math.floor(Math.random() * allLowers.length)]);
            } passwordArray = passwordArray.concat(lowerArray);
            console.log(passwordArray);

        }


        var finalPassword = passwordArray.join(separator = '');
        console.log(finalPassword);
        return finalPassword;
    }
}


// function generatePassword() {
//     var lowerArray=[]
//     for (var i = 0; i < Math.floor(passwordLength/4); i++) {
//         lowerArray.push(allLowers[Math.floor(Math.random() * allLowers.length)]);
//       }
//     console.log(lowerArray);

// }

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = characterTypes();
    //generatePassword(); //this will return a variable by the name of password... let's log it
    //console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


