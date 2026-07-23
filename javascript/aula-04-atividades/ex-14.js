let amigos = [
  {nome: "Hadassa", idade: 15},
  {nome: "Abraão", idade: 16},
  {nome: "Betriz", idade: 17},
  {nome: "Rafa", idade: 18}
]

let nomes = []
let idades = []

amigos.forEach(function(amigo) {
  nomes.push(amigo.nome)
  idades.push(amigo.idade)
})

console.log("Nomes:", nomes)  
console.log("Idades:", idades) 