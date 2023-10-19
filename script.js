add = (operandA, operandB) => operandA + operandB;
subtract = (operandA, operandB) => operandA - operandB;
multiply = (operandA, operandB) => operandA * operandB;
divide = (operandA, operandB) => operandA / operandB;


console.log('Should be 10', add(5,5));
console.log('Should be 10', subtract(15,5));
console.log('Should be 10', multiply(2,5));
console.log('should be 10', divide(100,10));

function operate(operandA, operandB, operator){
    return operator(operandA, operandB);
}

console.log(operate(5,12,subtract))