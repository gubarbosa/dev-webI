const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (valor) => {
  valor = parseFloat(valor);
  if (valor > 0) {
    console.log('O valor é positivo.');
  } else if (valor < 0) {
    console.log('O valor é negativo.');
  } else {
    console.log('O valor é zero.');
  }
  rl.close();
});
