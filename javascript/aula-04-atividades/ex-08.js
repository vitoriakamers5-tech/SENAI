let carro = {
  marca: "Fiat",
  modelo: "500"
}

console.log("Antes:", carro)

carro.ano = 2011
carro.cor = "Vermelho"
carro.placa = "VIT-1010"

console.log("Depois:", carro)

console.log("Antes de remover:", carro)

delete carro.placa

console.log("Depois de remover:", carro)
console.log("placa ainda existe?", "placa" in carro) 