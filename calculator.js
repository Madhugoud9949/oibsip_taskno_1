const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");


function appendToResult(value) {
    inputElement.textContent += value;
}


function calculate() {
    try {
        const result = eval(inputElement.textContent);
        outputElement.textContent = result;
        inputElement.textContent = result; 
    } catch (error) {
        outputElement.textContent = "Error";
    }
}


function clearLastEntered() {
    inputElement.textContent = inputElement.textContent.slice(0, -1);
}


function clearResult() {
    inputElement.textContent = "0";
    outputElement.textContent = "0";
}


function toggleSign() {
    const lastChar = inputElement.textContent.slice(-1);
    if (lastChar === '-') {
        inputElement.textContent = inputElement.textContent.slice(0, -1);
    } else {
        inputElement.textContent += '-';
    }
}


function calculatePercentage() {
    inputElement.textContent = eval(inputElement.textContent) / 100;
    calculate();
}


function calculateSquareRoot() {
    inputElement.textContent = Math.sqrt(eval(inputElement.textContent));
    calculate();
}


function calculateExponent() {
    inputElement.textContent += '**';
}

function calculateNaturalLog() {
    inputElement.textContent = 'Math.log(' + inputElement.textContent + ')';
    calculate();
}


function calculateLogarithm() {
    inputElement.textContent = 'Math.log10(' + inputElement.textContent + ')';
    calculate();
}


function insertPi() {
    inputElement.textContent += Math.PI;
}


function insertEuler() {
    inputElement.textContent += Math.E;
}
