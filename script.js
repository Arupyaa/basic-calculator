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

let calculator = {
    num1: 0,
    num2: 0,
    operator: '',
    isSecondNumber: false
};

function parseNumber(target) {
    //check if parseNumber was called for the first time after an operator
    if(calculator.operator !='' && !calculator.isSecondNumber)
    {
        display.textContent = '0';
        calculator.isSecondNumber = true;
    }

    if (display.textContent == '0')
        display.textContent = target.textContent;
    else
        display.textContent += target.textContent;


}

function parseOperator(target) {
    if (calculator.operator === '') {
        calculator.num1 = Number(display.textContent);
    }
    //call operate on the current 2 numbers if parseOperator was called after a second number was entered
    else if (calculator.isSecondNumber) {
        calculator.num1 = calculatorOperate();
    }

    calculator.operator = target.textContent;
}

function calculatorOperate(){

}