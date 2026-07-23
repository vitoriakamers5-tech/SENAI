let filme = {
  titulo: "Barbie e o Segredo das Fadas",
  diretor: "William Lau",
  ano: 2011,
  genero: "fantasia"
}

for(let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`)
}