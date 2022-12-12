let number1 = prompt("Digite um número");
let number2 = prompt("Digite um segundo número");
number1 = Number(number1);
number2 = Number(number2);
let result = 0;
let operator = prompt("Escolha qual operador usar (+ - * / %)");

switch (operator) {
  case "+":
    result = number1 + number2;
    alert(result);
    break;
  case "-":
    result = number1 - number2;
    alert(result);
    break;
  case "/":
    result = number1 / number2;
    alert(result);
    break;
  case "*":
    result = number1 * number2;
    alert(result);
    break;
  case "%":
    result = number1 % number2;
    alert(result);
    break;
  default:
    alert("Dados inseridos contem erro");
    break;
}

