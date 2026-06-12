const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 9 }
];

const aprovados = alunos
  .filter(aluno => aluno.nota >= 7)
  .map(aluno => aluno.nome);

console.log(aprovados);