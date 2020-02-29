var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';

var button = document.getElementById("generate");

var userChoices = {};


var charLength = parseInt(prompt("Please type in a number between 8 and 128."));

 
console.log(charLength)


function promptUser() {
  var numChar = confirm("Would you like numbers?");
  var lowerChar = confirm("Would you like lowercase characters?");
  var upperChar = confirm("Would you like uppercase characters?");
  var special = confirm("Would you like special characters?");


  if (numChar) {
    userChoices["numEl"] = numEl;
  }
  if (lowerChar) {
    userChoices["lowerEl"] = lowerEl;
  }  
  if (upperChar) {
    userChoices["upperEl"] = upperEl;
  }
  if (special) {
    userChoices["specialEl"] = specialEl;
  }
  
 
  console.log(userChoices);
}


promptUser();


function writePassword() {
  let finalPassword = '';
  for (var i = 0; i < charLength; i++) { 

    let passwordEls = Object.keys(userChoices)
    let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
    let char = getRandomCharacter(userChoices[randomEl]);

    finalPassword += char;

    console.log('RandomCharacter', char);
    console.log(finalPassword, finalPassword.length);
    console.log('>>>>>>>>>>>>>>>>', charLength)

  

  } 
  return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();



button.addEventListener("click", function(){
  password.innerHTML = writePassword();
})

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

btnCopy.onclick = function(){
  myInp.select();
  document.execCommand("Copy");
}