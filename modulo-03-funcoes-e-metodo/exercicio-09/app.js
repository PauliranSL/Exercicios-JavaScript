/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
console.log("********************* 01 *******************");

function multiply (primeiroNumero = 5  , segundoNumero = 3 ){
    return  primeiroNumero * segundoNumero    
}

console.log(multiply());

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
console.log("********************* 02 *******************");

const divisao = function(primeiroNumero = 0, segundoNumero = 0){
  return primeiroNumero / segundoNumero
}

console.log(divisao(10,2));

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
console.log("********************* 03 *******************");

const log = function( params = 'Voce deve passar um valor como parametro'){
  return params
}

console.log(log());

function stringFor(){
  for (let i = 1 ; i<8 ; i++) {
    console.log(`Esta é a ${i}ª vez que essa string é exibida.`);
  }

} stringFor();



/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
console.log("********************* 04 *******************");

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']


const transformeUpperCase = function ( array = []){
   let newArray = []

  for ( let i = 0 ; i<array.length ; i++){
    newArray.push(array[i].toUpperCase())
  }
  return newArray
}
console.log(transformeUpperCase(millennialWords));



/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/
console.log("********************* 05 *******************");

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]


let positivoNumber = 0
let negativeNumber = 0

const isPositive = function(number=0){
  return number>= 1
}

for( let i = 0 ; i<randomNumbers.length ; i++){
  if(isPositive(randomNumbers[i])){
    positivoNumber++
  } else {
    negativeNumber++
  }
}

console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positivoNumber} positivos e ${negativeNumber} negativos.`);

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
console.log("********************* 06 *******************");

const getOddNumbers = function(number = []){
  let newArray = []

  for ( let i = 0 ; i<number.length ; i++){
    if(number[i] % 2 !== 0){
      newArray.push(number[i])
    }
  }
  return newArray
}

console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]));

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

console.log("********************* 07 *******************");

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentence = ''

for( let i = 0 ; i<functions.length ; i++){
  sentence += `${functions[i]()} `
}

console.log(sentence);