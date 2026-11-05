const calculate = document.getElementById("start");


const result = document.getElementById("result");

calculate.addEventListener("click", () => {
let optionSelected = document.querySelector("select").value;
let num1 = Number.parseFloat(document.getElementById("num1").value) || 0;
let num2 = Number.parseFloat(document.getElementById("num2").value) || 0;
    switch (optionSelected) {
        case "add":
            result.textContent = add(num1, num2);
            break;
        case "sub":
            result.textContent = sub(num1, num2);
            break;
        case "multi":
            result.textContent = multi(num1, num2);
            break;
        case "div":
            result.textContent = num2 === 0 ? "Ei voi jakaa nollalla" : div(num1, num2);
            break;
    }
});

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multi(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function div(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
    
}