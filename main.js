/*Exercício 01: Crie um script que exiba a mensagem "Hello World!" 
em um alerta no navegador.*/
  alert('Hello World');



/*Exercício 02: Crie um script que declare duas variáveis e
exiba o resultado da soma entre elas.*/
  
  let numOne = Number(prompt("Digite o primeiro número: "))
  let numTwo = Number(prompt("Digite o segundo número: "))

  function sum (numOne, numTwo) {
  let result = numOne + numTwo;
  return result
  }

  let resultSum = sum (numOne, numTwo);
  alert(`Soma de ${numOne} + ${numTwo} é: ${resultSum}`)
  



/*Exercício 03: Crie um script que declare uma variável e 
verifique se o seu valor é um número. Se for, exiba a mensagem 
"É um número", caso contrário, exiba a mensagem "Não é um número".
Para saber o tipo de dado você pode usar o operador `typeof`*/

  
  const isNumber = () => {
    let value = prompt("Digite qualquer coisa: ")
      if (Number(value)) {
        return alert (`O valor digitado é um número`);
      } else{
        return alert (`O valor digitado não é um número`);
      }
  }
  isNumber()
  


/*Exercício 04: Crie um script que declare uma variável e verifique se o seu valor é uma string. 
Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem 
"Não é uma string".
 */

  
  const isString = () => {
    let value = prompt("Digite qualquer coisa: ")
      if (isNaN(value)) {
        return alert (`O valor digitado é uma string`);
      } else{
        return alert (`O valor digitado não é uma string`);
      }
  }
  isString()
  



/*Exercício 05: Crie um script que declare uma variável e verifique se o seu valor é um booleano.
Se for, exiba a mensagem "É um booleano", caso contrário, 
exiba a mensagem "Não é um booleano".
 */

  
  const isBoolean = true; 

      if (typeof isBoolean == 'boolean') {
        return alert (`É um dado booleano`);
      } else{
        return alert (`Não é um dado booleano`);
      }
  


/*Exercício 06: Crie um script que declare duas 
variáveis e exiba o resultado da subtração entre elas..
 */

  
  let numOne = Number(prompt("Digite o primeiro número: "))
  let numTwo = Number(prompt("Digite o segundo número: "))

  function sub (numOne, numTwo) {
  let result = numOne - numTwo;
  return result
  }

  let resultSub = sub (numOne, numTwo);
  alert(`Subtração de ${numOne} - ${numTwo} é: ${resultSub}`)
  



/*Exercício 07: Crie um script que declare duas 
variáveis e exiba o resultado da multiplicação entre elas..
*/

  
  let numOne = Number(prompt("Digite o primeiro número: "))
  let numTwo = Number(prompt("Digite o segundo número: "))

  function mult (numOne, numTwo) {
  let result = numOne * numTwo;
  return result
  }

  let resultMult = mult (numOne, numTwo);
  alert(`Multiplicação de ${numOne} x ${numTwo} é: ${resultMult}`)
 



/*Exercício 08: Crie um script que declare duas 
variáveis e exiba o resultado da divisão entre elas..
*/

  
  let numOne = Number(prompt("Digite o primeiro número: "))
  let numTwo = Number(prompt("Digite o segundo número: "))

  function div (numOne, numTwo) {
  let result = numOne / numTwo;
  return result
  }

  let resultDiv = div (numOne, numTwo);
  alert(`Divisão de ${numOne} / ${numTwo} é: ${resultDiv}`)
  



/*Exercício 09: Crie um script que declare uma variável e verifique se 
o seu valor é um número par. Se for, exiba a mensagem "É um número 
par", caso contrário, exiba a mensagem "Não é um número par".
*/

  
  const num = Number(prompt("Digite um número: "));
    function isPar (num){
      if ( (num % 2) == 0) {
        return alert (`O número ${num} é par!!!`)
      } else {
        return alert (`O número ${num} não é par!!!`)
      }
    }
    isPar(num)
  



/*Exercício 10: Crie um script que declare uma variável e verifique 
se o seu valor é um número ímpar. Se for, exiba a mensagem "É um 
número ímpar", caso contrário, exiba a mensagem "Não é um número 
ímpar".
*/


const num = Number(prompt("Digite um número: "));
function isImpar (num){
  if ( (num % 2) == 0) {
    return alert (`O número ${num} não é impar!!!`)
  } else {
    return alert (`O número ${num} é impar!!!`)
  }
}
isImpar(num)
