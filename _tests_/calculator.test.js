import Calculator from './../src/calculator.js';

describe('Calculator', ()=> {

  test('should correctly create a calculator', ()=>{
    const calculator = new Calculator(4,2,1);
    expect(calculator.number1).toEqual(4);
    expect(calculator.number2).toEqual(2);
    expect(calculator.operation).toEqual(1);

  });
});