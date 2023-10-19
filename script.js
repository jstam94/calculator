
let screen = document.querySelector('#screen')

let calculator = {
    display: null,
    previousDisplay: null,
    lastPressed: null,
    updateScreen(){
        screen.textContent = calculator.display
    },
    clear(){
        this.display = null;
        this.previousDisplay = null;
        this.lastPressed = null;
        this.updateScreen();
    },
}

calculator.updateScreen();

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
    if (calculator.lastPressed === 'operator'){
        calculator.display = `${calculator.display}` + ` ${newNumber}`;
        screen.textContent = calculator.display
        calculator.lastPressed = 'number'
        return;
    }
    calculator.display = `${calculator.display}` + `${newNumber}`;
    screen.textContent = calculator.display
    calculator.lastPressed = 'number'
}

numberKeys.forEach((element) => element.addEventListener('click', () => pressNumber(element.textContent)))


function pressOperator(operator){
    if (calculator.display === null) return;
    if (calculator.lastPressed == 'operator') return;
    calculator.display = `${calculator.display} ${operator}`;
    screen.textContent = calculator.display;
    calculator.lastPressed = 'operator'
    return;
}

let operatorKeys = document.querySelectorAll('.operator')
operatorKeys.forEach((element) => element.addEventListener('click', () => pressOperator(element.textContent)))

let clearKey = document.querySelector('#ce-key')
clearKey.addEventListener('click', () => calculator.clear())

// add = (operandA, operandB) => operandA + operandB;
// subtract = (operandA, operandB) => operandA - operandB;
// multiply = (operandA, operandB) => operandA * operandB;
// divide = (operandA, operandB) => operandA / operandB;

// function operate(operandA, operandB, operator){
//     return operator(operandA, operandB);
// }



// let equalKey = document.querySelector('#equals-key')










// operatorKeys.forEach((element) => element.addEventListener('click', () =>{
//     alert(`I am a ${element.textContent} key`)
// }));

// equalKey.addEventListener('click', () => alert(`I am a ${equalKey.textContent} key`));
// clearKey.addEventListener('click', () => alert(`I am a ${clearKey.textContent} key`));
