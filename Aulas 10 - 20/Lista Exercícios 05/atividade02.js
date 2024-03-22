const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}

function lerNumeros(count) {
  rl.question(`Digite o ${count}º número inteiro: `, (numero) => {
    numero = parseInt(numero);
    const parOuImpar = verificarParOuImpar(numero);
    console.log(`O número ${numero} é ${parOuImpar}.`);
    if (count < 15) {
      lerNumeros(count + 1);
    } else {
      rl.close();
    }
  });
}

lerNumeros(1);
