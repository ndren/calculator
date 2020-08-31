function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    if (!a) return b;
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return b;
    }
}
function clearDisplay() {
    display.textContent = '';
}
function appendDigit() {
    if (displayToBeCleared) {
        clearDisplay();
        displayToBeCleared = false;
    }
    if (display.textContent.length <= 15) {
        display.textContent += this.textContent;
    }
}
function appendPoint() {
    if (!display.textContent.includes('e') && !display.textContent.includes('.')) {
        display.textContent += '.';
    }
}
function appendResult() {
    display.textContent = newNum;
}
function returnResult() {
    if (selectedOperator !== '/' || newNum !== '0') {
        newNum = operate(selectedOperator, oldNum, newNum);
        appendResult();
    }
    else {
        display.textContent = 'Not on my watch - I mean display!'
    }
}
function resetAll() {
    display.textContent = ''
    newNum = null;
    oldNum = null;
    selectedOperator = null;
}
function storeEquation() {
    oldNum = newNum;
    newNum = display.textContent;
    clearDisplay();
    returnResult();
    if (this !== equalSign) { selectedOperator = this.textContent; }
    displayToBeCleared = true;
}
let newNum;
let oldNum;
let selectedOperator;
displayToBeCleared = false;
let display = document.querySelector('#display');
let operands = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');
let equalSign = document.querySelector('#equalSign');
let clear = document.querySelector('#clear');
let decimalPoint = document.querySelector('#decimalPoint')

operands.forEach(operand => {
    operand.addEventListener('click', appendDigit);
})
operators.forEach(operator => {
    operator.addEventListener('click', storeEquation);
})
equalSign.addEventListener('click', storeEquation);
clear.addEventListener('click', resetAll);
decimalPoint.addEventListener('click', appendPoint);