const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function converterFahrenheitParaCelsius(temperaturaFahrenheit) {
  const temperaturaCelsius = (temperaturaFahrenheit - 32) * (5/9);
  return temperaturaCelsius;
}

rl.question('Digite a temperatura em Fahrenheit: ', (temperaturaFahrenheit) => {
  const temperaturaCelsius = converterFahrenheitParaCelsius(parseFloat(temperaturaFahrenheit));
  console.log(`${temperaturaFahrenheit} graus Fahrenheit é igual a ${temperaturaCelsius.toFixed(2)} graus Celsius.`);
  rl.close();
});
