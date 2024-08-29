//module.exports = function toReadable (number) {
function toReadable(number) {  
    typeNumber.textContent = `typeof number is '${typeof number}'`;
    numberElement.textContent = `number is - ${number}`;
    //console.debug(typeof number);
    if (typeof number == 'string') {
        console.debug(number); 
        resultElement.textContent = `result is '${number}'`;
        return number; 
    }
    let result = 'Some readable number';
    console.debug(number);
    //console.debug(result);

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    number = Math.round(Math.abs(number));
    const length = number.toString().length;
    lengthElement.textContent = `length is - ${length}`;

    result = ones[number];
    return result;
}

// console.debug(toReadable('one'));
const input = document.getElementById('input-number');
const button = document.getElementById('convert-button');
const typeNumber = document.getElementById('type-of-number');
const lengthElement = document.getElementById('result');
const numberElement = document.getElementById('number');
const resultElement = document.getElementById('result');
button.addEventListener('click', function() {
    const num = parseInt(input.value);
    const result = toReadable(num);
    resultElement.textContent = `result is '${result}'`;
});
//const result = toReadable(-1);
// document.getElementById('output').textContent = result;

