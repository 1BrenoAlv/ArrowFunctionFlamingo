// Busca de Usuário: Dado um array de objetos {id, nome}, use find para encontrar o usuário com id === 3.

const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" }
];

const usuario = usuarios.find(u => u.id === 3);

console.log(usuario);