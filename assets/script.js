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

    passwordLegth = 0;
    pwdCriteria.pwdLegth = 0;
    result = "";

    
}

