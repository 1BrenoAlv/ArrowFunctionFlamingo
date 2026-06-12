// Soma de Carrinho: (Dica: Use reduce). Crie uma arrow function que some todos os valores de um array de preços.
const soma = precos => precos.reduce((total, preco) => total + preco, 0);

console.log(soma([10, 20, 30]));