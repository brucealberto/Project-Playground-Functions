// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separar = string.split(' ');
  return separar;
}

// Desafio 4
function concatName(array) {
  let concatenar = array[array.length - 1] + ', ' + array[0];
  return concatenar;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let resultado = vitoria + empate;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let repetir = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero == array[index]) {
      repetir += 1
    }
  }

  return repetir;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {







}

// Desafio 8
function fizzBuzz(array) {
  let test = [];
  for (index = 0; index < array.length; index += 1) {

    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      test.push("fizzBuzz");
    } else if (array[index] % 3 == 0) {
      test.push("fizz");
    } else if (array[index] % 5 == 0) {
      test.push("buzz");
    } else {
      test.push("bug!");
    }
  }
  return test;
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
