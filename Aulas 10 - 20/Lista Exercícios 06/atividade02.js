const readline = require('readline');
const { sqrt } = require('mathjs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularHipotenusa(catetoA, catetoB) {
  const hipotenusa = sqrt(catetoA ** 2 + catetoB ** 2);
  return hipotenusa;
}

rl.question('Digite o valor do cateto A: ', (catetoA) => {
  rl.question('Digite o valor do cateto B: ', (catetoB) => {
    const hipotenusa = calcularHipotenusa(parseFloat(catetoA), parseFloat(catetoB));
    console.log(`A hipotenusa é: ${hipotenusa.toFixed(2)}`);
    rl.close();
  });
});
