let compras = []

compras.push("arroz")
compras.push("feijão")
compras.push("macarrão")
compras.push("leite")
compras.push("pão")

console.log("Lista de compras:")
compras.forEach(function(item, i) {
  console.log(`${i + 1}. ${item}`)
})

console.log("Arroz está na lista?", compras.includes("arroz"))

let removido = compras.pop()
console.log("Item removido:", removido)

console.log("Lista atualizada (${compras.length} itens):")
compras.forEach(function(item, i) {
  console.log(`${i + 1}. ${item}`)
})