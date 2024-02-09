// TO DO: FIX MINUS KEY BEHAVIOR, FIX OPERATION KEYS WHEN THERE IS NO INTEGERS, DECIMAL?


add = (a, b) => a + b
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;
function operate(a,b, operator){
    a = +a;
    b = +b;
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
            }
}

let screenLeft = document.querySelector('#first-integer');
let screenMiddle = document.querySelector('#operator');
let screenRight= document.querySelector('#second-integer');
let numberKeys = document.querySelectorAll('.number');
let operatorKeys = document.querySelectorAll('.operator');
let minusKey = document.querySelector('#minus-key')
let clearKey = document.querySelector('#ce-key');
let equalKey = document.querySelector('#equals-key')


let calculator = {
    previousInteger: null,
    currentInteger: null,
    operator: null,
    lastPressed: null,
    updateScreen(){
        screenLeft.textContent = this.previousInteger;
        screenMiddle.textContent = this.operator;
        screenRight.textContent = this.currentInteger;
    },
    pressEquals(){
        if(!this.previousInteger || !this.currentInteger) return;
        this.previousInteger = operate(this.previousInteger, this.currentInteger, this.operator);
        this.currentInteger = null;
        this.operator = null;
        this.updateScreen();
    },
    clear(){
        this.previousInteger = null;
        this.currentInteger = null;
        this.operator = null,
        this.lastPressed = null,
        this.updateScreen();
    },
    pressNumber(input){
        if (this.currentInteger === null){
            if(input == 0){
                return;
            }
            this.currentInteger = input;
            this.updateScreen();
            return;
        }
        this.currentInteger = `${this.currentInteger}` + `${input}`;
        this.lastPressed = 'number';
        this.updateScreen();
        return;
    }
}


function pressOperator(operator){
    if(calculator.previousInteger && calculator.currentInteger){
        calculator.pressEquals();
        calculator.operator = operator;
        calculator.updateScreen();
        return;
    }
    calculator.operator = operator;
    calculator.updateScreen();
    if(calculator.previousInteger === null){
        calculator.previousInteger = calculator.currentInteger;
        calculator.currentInteger  = null;
        calculator.updateScreen();
    } else{
        operate(calculator.previousInteger, calculator.currentInteger, operator)
        calculator.updateScreen()
    }
}  


numberKeys.forEach((element) => element.addEventListener('click', () => calculator.pressNumber(element.textContent)));
equalKey.addEventListener('click', () => calculator.pressEquals());
operatorKeys.forEach((element) => element.addEventListener('click', () => pressOperator(element.textContent)));
clearKey.addEventListener('click', () => calculator.clear());

