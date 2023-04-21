var generateBtn = document.querySelector('#generate')

var pwdCriteria = {

    pwdLength: 0,

    pwdLowerCase:  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    pwdupperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

    pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

    pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

}

function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var result = "";

    var passwordLength = 0;
    var upperCase;
    var lowerCase;
    var numbers;
    var specialChar;

    passwordLength = 0;
    pwdCriteria.pwdLength = 0;
    result = "";

while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    if (passwordLength === null) {
        return "Your Secure Password";
    }
    else {
        if (!isFinite(passwordLength)) {
            alert("You did not enter a number");
            return "Your Secure Password";
        }
        else {
            if (passwordLength < 8 || passwordLength > 128 ) {
                alert ("Password must be bewtween 8 and 128 characters.");
                return "Your Secure Password";
            }
        else {

            showPrompts();

            while (pwdCriteria.pwdLength < passwordLength) {

                if (lowerCase === false && upperCase === falso && numbers === false && specialChar === false) {
                    alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
                }

                else {

                    if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                        var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                        result = result + lc;
                        pwdCriteria.pwdLength;
                    }

                    if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                        var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                        result = result + sc;
                        pwdCriteria.pwdLength++;

                    }

                    if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                        var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                        result = result + num;
                        pwdCriteria.pwdLength++;
                    }
                }
            }
        }
    }
 }
    
    }

