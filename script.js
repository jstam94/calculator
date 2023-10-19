let calculator = {
    display: null,
}

let screen = document.querySelector('#screen')
screen.textContent = calculator.display

let numberKeys = document.querySelectorAll('.number')

function pressNumber(newNumber){
    if (calculator.display === null){
        if(newNumber == 0){
            return;
        }
        calculator.display = newNumber;
        screen.textContent = calculator.display;
        return;
    }
    calculator.display = `${calculator.display}` + `${newNumber}`;
    screen.textContent = calculator.display
}

numberKeys.forEach((element) => element.addEventListener('click', () => pressNumber(element.textContent)))


// add = (operandA, operandB) => operandA + operandB;
// subtract = (operandA, operandB) => operandA - operandB;
// multiply = (operandA, operandB) => operandA * operandB;
// divide = (operandA, operandB) => operandA / operandB;

// function operate(operandA, operandB, operator){
//     return operator(operandA, operandB);
// }


// let operatorKeys = document.querySelectorAll('.operator')
// let equalKey = document.querySelector('#equals-key')
// let clearKey = document.querySelector('#ce-key')









// operatorKeys.forEach((element) => element.addEventListener('click', () =>{
//     alert(`I am a ${element.textContent} key`)
// }));

// equalKey.addEventListener('click', () => alert(`I am a ${equalKey.textContent} key`));
// clearKey.addEventListener('click', () => alert(`I am a ${clearKey.textContent} key`));
