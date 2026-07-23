let biblioteca = [
  {titulo: "verity", autor: "Colleen Hoover", paginas: 260, lido: true},
  {titulo: "Para Todos os Garotos que Já Amei", autor: " Jenny Han", paginas: 200, lido: true},
  {titulo: "O massacre da família Hope", autor: "Riley Sager", paginas: 400, lido: false},
  {titulo: "A Biblioteca da Meia-Noite", autor: "Matt Haig", paginas: 308, lido: false},
  {titulo: "Melhor do que nos filmest", autor: "Lynn Painter", paginas: 352, lido: false}
]

// 1. Listar todos os títulos com autor
console.log("Catalogo de livros:")
biblioteca.forEach(function(livro) {
  console.log(`"${livro.titulo}" por ${livro.autor}`)
})

// 2. Object.keys no primeiro livro
console.log("Propriedades do primeiro livro:", Object.keys(biblioteca[0]))

// 3. for...in no primeiro livro
console.log("Detalhes do primeiro livro:")
for(let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`)
}