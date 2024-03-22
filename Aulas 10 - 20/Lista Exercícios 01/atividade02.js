const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a quantidade total de curtidas
function calcularCurtidas(dias, linksPorDia, curtidasPorLink) {
    const totalLinks = dias * linksPorDia;
    const totalCurtidas = totalLinks * curtidasPorLink;
    return totalCurtidas;
}

// Solicita ao usuário a quantidade de dias
rl.question("Quantos dias você compartilhou links no Facebook? ", (dias) => {
  // Converte a entrada para um número inteiro
  dias = parseInt(dias);

  // Define a quantidade de links compartilhados por dia e a quantidade de curtidas por link
  const linksPorDia = 6;
  const curtidasPorLink = 8;

  // Calcula a quantidade total de curtidas
  const totalCurtidas = calcularCurtidas(dias, linksPorDia, curtidasPorLink);

  // Exibe a quantidade total de curtidas na tela
  console.log("Total de curtidas recebidas em " + dias + " dias: " + totalCurtidas);

  rl.close();
});
