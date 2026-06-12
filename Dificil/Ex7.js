const categorias = ["eletronicos", "casa", "eletronicos"];

const contagem = categorias.reduce((acc, categoria) => {
  acc[categoria] = (acc[categoria] || 0) + 1;
  return acc;
}, {});

console.log(contagem);