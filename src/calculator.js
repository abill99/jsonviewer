export default function Calculator(number1, number2, operation) {
  this.number1 = number1;
  this.number2 = number2;
  this.operation = operation;
}

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

Calculator.prototype.calculate = function() {

  console.log("In calculate "  + this.number1 + " " + this.number2 + " " +this.operation);
  return internal_calculate(this.number1, this.number2, this.operation);
}

function internal_calculate(number1, number2, operation) {
  let result = -9999;
    switch(operation){
      case 1 : 
       result = add(number1, number2);
       break;
      case 2 :
        result = subtract(number1, number2);
        break;
      case 3 : 
        result = multiply(number1, number2);
        break;
      case 4 :
        result = divide(number1, number2);
        break;
      default:
        result = -99999999;

    }
    return result;
}