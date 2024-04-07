var originalText = "I love my country Pakistan.<br> I like my city Faisalabad.<br> I love my Homeland."

var cities = ['Faisalabad', 'Lahore','Karachi','Islamabad','Mananwala','Sheikhupura','Attock']
console.log(cities[1])
document.getElementById('originalTextBox').innerHTML = originalText;
function showOutput(output) {
    document.getElementById("output").innerHTML = output;

}
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}
const inputValue = ( =>) {
return document.getElementById("inputText").value;
}

// Lowercase
// ........................
function lowercase() {
    let lowercaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowercaseText;
}

// uppercase
function uppercase() {
    let uppercaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = uppercaseText;
}
// Capitalize............
function Capitalize() {
 let  capitalizeText = '<span style="text-transform: capitlize;">' + originalText + '</span>';
 document.getElementById("output").innerHTML = capitalizeText;

}
// Better Formatting..............
function.betterformatting() {
    let text = document.getElementById("inputText").value;
    if (!text) {
        alert("please type your text")
        return;
    }
    text = text.toLowerCase();
    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;
}
// print all cities............
function printAllCities() {
document.getElementById("output").innerHTML = "";
for (let i = 0; i< cities.length; i++){
  let num = i+1;
  document.getElementById9('output').innerHTML += num + ')' + cities[i] + '<br>';

}
}
let name = "javaSCRIPT"
let nameFirst = name.slice(0,1)
let nameOtherLetters = name.slice(1)
// console.log(name.length)
nameOtherLetters = nameOtherLetters.toUpperCase
nameOtherLetters = nameOtherLetters.toLowerCase
console.log(nameFirstLetters)
console.log(nameOtherLetters)
let cityName = nameOtherLetters = nameOtherLetters
console.log(cityName)
// Addcity into list
function addCity() {
  let city = document.getElementById("inputText").value;
  if (city.length < 3) {
    alert('please type your city correctly.');
    return;
  }
  let cityFirstLetter = city.slice(0,1).toUpperCase();
  console.log(firstCityLetter);
  let cityAllLetter = city.slice(1).toLowerCase();
  console.log(cityAllLetter);
}
// check city in list .............
function checkCity() {
  let city = document.getElementById("inputText").value;
  if (!city) {
    alert('please type your city name.');
    return;
  }
  cityFirstLetter = city.charAt(0).toUpperCase();
  cityAllLetter = city.slice(1).toLowerCase();

  let cityFound = false;
  
  for( let i=0; i < cities.length; i++) {
    if(cities[i]=== cityWordInCapitalize){
    cityFound = true;
    let cityFirstLetter = city.slice(0,1).toUpperCase();}
  
  }
     if (cityFound == false) {
      let html = "SORRY"; we couldnot find
      let cityFirstLetter = city.slice(0,1).toUpperCase(); 
     }
}
const checkCityButton = document.getElementById('checkCityButton');
const findWordButton = document.getElementById('findWordButton');
const replaceWordButton = document.getElementById('replaceWordButton');

// Define a function to handle the "Check Your City in List" button click
checkCityButton.addEventListener('click', () => {
  console.log('Checking city in list...');
  // Add your code here to check the city in a list
});

// Define a function to handle the "Find This Word" button click
findWordButton.addEventListener('click', () => {
  console.log('Finding word...');
  // Add your code here to find a specific word
});

// Define a function to handle the "Replace This Word" button click
replaceWordButton.addEventListener('click', () => {
  console.log('Replacing word...');
  // Add your code here to replace a specific word
});












// let inputText = document.getElementById("input-text");
// let outputText = document.getElementById("output-text");
// let originalText = document.getElementById("original-text");

// // Set initial input text
// inputText.value = originalText.textContent;

// // Convert to Lowercase
// document.getElementById("convert-to-lowercase").addEventListener("click", function() {
//   outputText.value = inputText.value.toLowerCase();
// });

// // Convert to Capitalize
// document.getElementById("convert-to-capitalize").addEventListener("click", function() {
//   let words = inputText.value.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   outputText.value = words.join(" ");
// });

// // Convert to Uppercase
// document.getElementById("convert-to-uppercase").addEventListener("click", function() {
//   outputText.value = inputText.value.toUpperCase();
// });

// // Better Formatting
// document.getElementById("better-formatting").addEventListener("click", function() {
//   outputText.value = inputText.value.replace(/\.(\s+)?([a-z])/g, ".$2").replace(/\s+/g, " ");
// });

// // Add City
// document.getElementById("add-city").addEventListener("click", function() {
//   let city = prompt("Enter your city:");
//   let cities = ["Islamabad", "Lahore", "Karachi", "Faisalabad"];
//   cities.push(city);
//   originalText.textContent = cities.join(", ");
//   inputText.value = originalText.textContent;
//   outputText.value = "";
// });

// // Print Cities
// document.getElementById("print-cities").addEventListener("click", function() {
//   let cities = ["Isl