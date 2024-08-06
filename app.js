var expression = '';
function appendCharacter(char) {
    expression += char;
    updateResult(expression);
}
function clearResult() {
    expression = '';
    updateResult('0');
}
function updateResult(value) {
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerText = 'Result: ' + value;
    }
}
function calculateResult() {
    try {
        // Evaluate the expression
        var result = eval(expression);
        updateResult(result.toString());
        expression = result.toString();
    }
    catch (error) {
        updateResult('Error');
        expression = '';
    }
}
