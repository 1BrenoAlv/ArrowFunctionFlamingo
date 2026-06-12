const datas = ["10/07/2025", "25/12/2024"];

const resultado = datas.map(data => {
  const [dia, mes, ano] = data.split("/");
  return { dia, mes, ano };
});

console.log(resultado);