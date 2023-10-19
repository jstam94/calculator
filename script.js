add = (operandA, operandB) => operandA + operandB;
subtract = (operandA, operandB) => operandA - operandB;
multiply = (operandA, operandB) => operandA * operandB;
divide = (operandA, operandB) => operandA / operandB;

function operate(operandA, operandB, operator){
    return operator(operandA, operandB);
}

let numberKeys = document.querySelectorAll('.number')
let operatorKeys = document.querySelectorAll('.operator')
let equalKey = document.querySelector('#equals-key')
let clearKey = document.querySelector('#ce-key')


numberKeys.forEach((element) => element.addEventListener('click', () =>{
    alert(`I am a ${element.textContent} key`)
}))

operatorKeys.forEach((element) => element.addEventListener('click', () =>{
    alert(`I am a ${element.textContent} key`)
}))

equalKey.addEventListener('click', () => alert(`I am a ${equalKey.textContent} key`))
clearKey.addEventListener('click', () => alert(`I am a ${clearKey.textContent} key`))