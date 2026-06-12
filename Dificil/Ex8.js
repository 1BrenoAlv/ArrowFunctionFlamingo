const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log(executarOperacao(10, 5, (x, y) => x + y));