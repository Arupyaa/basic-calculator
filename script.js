const display = document.querySelector("#display");
const btn_num = document.querySelectorAll(".btn-num");
const btn_operator = document.querySelectorAll(".btn-operator");
const btn_erase = document.querySelector("#btn-erase");
const btn_cancel = document.querySelector("#btn-cancel");
const btn_equal = document.querySelector("#btn-equal");

for (let element of btn_num) {
    element.addEventListener("click", function (e) { parseNumber(e.target) });
}
for (let element of btn_operator) {
    element.addEventListener("click", function (e) { parseOperator(e.target) });
}
btn_equal.addEventListener("click", calculatorOperate);
btn_cancel.addEventListener("click",calculatorClear);
btn_erase.addEventListener("click",calculatorErase);

let calculator = {
    num1: 0,
    num2: 0,
    operator: '',
    isSecondNumber: false,
    isOperatedOn: false
};

function parseNumber(target) {
    //check if parseNumber was called for the first time after an operator
    if (calculator.operator != '' && !calculator.isSecondNumber) {
        display.textContent = '0';
        calculator.isSecondNumber = true;
    }

    if (display.textContent == '0' || calculator.isOperatedOn) {
        display.textContent = target.textContent;
        calculator.isOperatedOn = false;
    }
    else
        display.textContent += target.textContent;


}

function parseOperator(target) {
    //take no action if operator button was pressed directly after equal button
    if (calculator.isOperatedOn)
        return
    else if (calculator.operator === '') {
        calculator.num1 = Number(display.textContent);
    }
    //call operate on the current 2 numbers if parseOperator was called after a second number was entered
    else if (calculator.isSecondNumber) {
        calculator.num1 = calculatorOperate();
    }

    calculator.operator = target.textContent;
}

function calculatorOperate() {
    //check if user reclicked equal again or clicked it without entering a second number
    if (calculator.isOperatedOn || !calculator.isSecondNumber)
        return

    let result = 0;
    if (calculator.isSecondNumber)
        calculator.num2 = Number(display.textContent);

    switch (calculator.operator) {
        case '+':
            result = calculator.num1 + calculator.num2;
            break;
        case '-':
            result = calculator.num1 - calculator.num2;
            break;
        case '*':
            result = calculator.num1 * calculator.num2;
            break;
        case '/':
            if (calculator.num2 == 0)
                result = 'no can do';
            else
                result = calculator.num1 / calculator.num2;
            break;
        case '%':
            result = calculator.num1 % calculator.num2;
            break;
    }
    if (!Number.isInteger(result) && result !='no can do')
        result = Number(result.toFixed(4));

    display.textContent = result;
    calculator.isSecondNumber = false;
    calculator.operator = '';
    calculator.num1 = 0;
    calculator.num2 = 0;
    calculator.isOperatedOn = true;

    return result;
}

function calculatorClear()
{
    display.textContent = '0';
    calculator.isSecondNumber = false;
    calculator.isOperatedOn = false;
    calculator.operator = '';
    calculator.num1 = 0;
    calculator.num2 = 0;
}

function calculatorErase()
{
    if(display.textContent.length ==1)
    {
        display.textContent = '0';
    }
    else
    {
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
    }
}