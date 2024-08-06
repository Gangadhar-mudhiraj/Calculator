let expression: string = '';

function appendCharacter(char: string): void {
    expression += char;
    updateResult(expression);
}

function clearResult(): void {
    expression = '';
    updateResult('0');
}

function updateResult(value: string): void {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerText = 'Result: ' + value;
    }
}

function calculateResult(): void {
    try {
        // Evaluate the expression
        const result = eval(expression);
        updateResult(result.toString());
        expression = result.toString();
    } catch (error) {
        updateResult('Error');
        expression = '';
    }
}
