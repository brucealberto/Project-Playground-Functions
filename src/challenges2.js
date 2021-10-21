// Desafio 10
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let newArray = [];
  // let tecnologia = {

  // }
  for (let index = 0; index < tech.length; index += 1) {
    newArray.push({
      tech: tech[index],
      name: name
    });
  };

  if (newArray == 0) {
    return 'Vazio!';
  }
  return newArray;
  // criar um objeto pra cada elemento do array
  // utilizar o sort() para ordem crescente
  // objetos tem que serem inseridos em novo array em ordem crescente
  // tenho que alterar o campo tech do objeto
  // exemplo {
  //   tech: "NomeTech"
  //   name: name
  // }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
