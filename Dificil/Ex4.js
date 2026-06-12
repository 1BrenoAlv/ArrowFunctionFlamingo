const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((soma, n) => soma + n, 0);

console.log(resultado);