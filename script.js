add = (operandA, operandB) => operandA + operandB;
subtract = (operandA, operandB) => operandA - operandB;
multiply = (operandA, operandB) => operandA * operandB;
divide = (operandA, operandB) => operandA / operandB;

function operate(operandA, operandB, operator){
    return operator(operandA, operandB);
}

let numberKeys = document.querySelectorAll('.number')

numberKeys.forEach((element) => element.addEventListener('click', () =>{
    alert(element.textContent)
}))