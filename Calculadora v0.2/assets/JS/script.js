alert(`Início de projeto!!!\n` + `Logo adicionarei as funcionalidades.\n\n` + `Muito obrigado pela atenção!`)
const display = document.querySelector('#nmr');


function somar() {
  const num1 = Number(prompt('Fala o primeiro número pra somar aí'));
  const num2 = Number(prompt(`Fala o segundo agora patrão. ${num1} mais quanto?`));
  const resultado = num1 + num2;
  return display.innerHTML = resultado;
};

function subtrair() {
  const num1 = Number(prompt('Fala o primeiro número pra somar aí'));
  const num2 = Number(prompt(`Fala o segundo agora patrão. ${num1} menos quanto?`));
  const resultado = num1 - num2;
  return display.innerHTML = resultado;
};

function multiplicar() {
  const num1 = Number(prompt('Fala o primeiro número pra somar aí'));
  const num2 = Number(prompt(`Fala o segundo agora patrão. ${num1} multiplicado por?`));
  const resultado = num1 * num2;
  return display.innerHTML = resultado;
};

function dividir() {
  const num1 = Number(prompt('Fala o primeiro número pra somar aí'));
  const num2 = Number(prompt(`Fala o segundo agora patrão. ${num1} divido por?`));
  const resultado = num1 / num2;
  return display.innerHTML = resultado;
};


