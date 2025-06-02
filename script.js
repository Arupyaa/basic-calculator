const display = document.querySelector("#display");
const btn_num = document.querySelectorAll(".btn-num");
const btn_operator = document.querySelectorAll(".btn-operator");
const btn_erase = document.querySelector("#btn-erase");
const btn_cancel = document.querySelector("#btn-cancel");
const btn_equal = document.querySelector("#btn-equal");

for (let element of btn_num) {
    element.addEventListener("click", function (e) { parseNumber(e.target) });
}

let calculator = {
    num1: 0,
    num2: 0,
    operator: ''
};

function parseNumber(target) {
    if (display.textContent == '0')
        display.textContent = target.textContent;
    else
        display.textContent += target.textContent;
}
