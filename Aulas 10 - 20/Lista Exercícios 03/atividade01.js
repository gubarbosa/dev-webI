const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    const maior = Math.max(parseFloat(num1), parseFloat(num2));
    console.log('O maior número é: ' + maior);
    rl.close();
  });
});
