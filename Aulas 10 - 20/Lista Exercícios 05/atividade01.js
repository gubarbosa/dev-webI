const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let somaPositivos = 0;
let qtdPositivos = 0;

function lerNumeros() {
  rl.question('Digite um número inteiro: ', (numero) => {
    numeros.push(parseInt(numero));
    if (numeros.length < 20) {
      lerNumeros();
    } else {
      verificarNumeros();
    }
  });
}

function verificarNumeros() {
  console.log('Números negativos:');
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      console.log(numeros[i]);
    } else if (numeros[i] > 0) {
      somaPositivos += numeros[i];
      qtdPositivos++;
    }
  }

  if (qtdPositivos > 0) {
    const mediaPositivos = somaPositivos / qtdPositivos;
    console.log('Média dos números positivos:', mediaPositivos.toFixed(2));
  } else {
    console.log('Não foram digitados números positivos.');
  }

  rl.close();
}

lerNumeros();
