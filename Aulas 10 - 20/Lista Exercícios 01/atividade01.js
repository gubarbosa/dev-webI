const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a diferença entre o valor pago e o valor da proposta
function calcularDiferenca(valorIngresso, proposta) {
    return Math.abs(valorIngresso - proposta); // Utiliza Math.abs() para garantir um valor positivo
}

// Valor que Marcos pagou pelo ingresso
const valorIngresso = 170.00;

// Solicitação para Marcos informar o valor da proposta
rl.question("Informe o valor da proposta recebida: ", (proposta) => {
  // Converte a entrada para um número de ponto flutuante
  proposta = parseFloat(proposta);

  // Calcula a diferença entre o valor pago e o valor da proposta
  const diferenca = calcularDiferenca(valorIngresso, proposta);

  // Exibe a diferença na tela
  console.log("A diferença entre o valor pago pelo ingresso e o valor da proposta é de R$" + diferenca.toFixed(2));

  rl.close();
});
