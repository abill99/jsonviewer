import Cipher from './cipher.js';
import Calculator  from './calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){

  $("form#calculator-form").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    let result = -99999999;
    const operation = parseInt($("#operation").val());

    let calc = new Calculator(number1, number2,operation);
    result = calc.calculate ();
   
    $("#output-data").text(result);
  });

  $("form#calculator-form2").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#calculator-form2 #number1").val());
    const number2 = parseInt($("#calculator-form2 #number2").val());
    let result = -99999999;
    const operation = parseInt($("#calculator-form2 #operation").val());

    let calc = new Calculator(number1, number2,operation);
    console.log("got calc");
    console.log(calc);
    result = calc.calculate ();
   
    $("#output-data").text(result);
  });

  
  $("form#cipher-form").submit(function(event){
    event.preventDefault();
    const word = $("#cipher-form #sentence").val();
    let ciph = new Cipher(word);
    let result = ciph.cipher();
   
    $("#output-data").text(result);
  });
  

  $("form#cipher-form2").submit(function(event){
    event.preventDefault();
    const word = $("#cipher-form2 #sentence").val();
    let ciph = new Cipher(word);
    let result = ciph.cipher();
   
    $("#output-data").text(result);
  });


});