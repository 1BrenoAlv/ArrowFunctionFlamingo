const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "João", notas: [6, 5, 7] }
];

const medias = alunos.map(aluno => ({
  nome: aluno.nome,
  media: aluno.notas.reduce((soma, n) => soma + n, 0) / aluno.notas.length
}));

console.log(medias);