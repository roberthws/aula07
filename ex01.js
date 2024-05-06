// Implementar um código de busca linear
// Você pode pesquisar na internet sobre
// Não há nenhum problema.

// function buscaLinear(array, elemento) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === elemento) return i;
//   }
//   return -1;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const elemento = 6;

// const indice = buscaLinear(array, elemento);
// if (indice !== -1) {
//   console.log(`O elemento ${elemento} foi encontrado no índice ${indice}.`);
// } else {
//   console.log(`O elemento ${elemento} não foi encontrado no array.`);
// }

// function buscaLinear(valorBuscado, listadeElementos) {
//   for (let index = 0; index < listadeElementos.length; index++) {
//     if (listadeElementos[index] === valorBuscado) {
//       return index;
//     }
//   }
//   return -1;
// }

// console.log(buscaLinear(9, [1, 2, 3, 9]))

//Um elemento vai ser passado,
// e caso encontrar, retornar o indice dele.

function buscaBinaria(valorBuscado, listadeElementos) {
  let inicio = 0,
    fim = listadeElementos.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (listadeElementos[meio] === valorBuscado) {
      return meio;
    } else if (valorBuscado <= listadeElementos[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }

  return -1;
}

console.log(buscaBinaria(6, [1, 3, 6, 8]));
