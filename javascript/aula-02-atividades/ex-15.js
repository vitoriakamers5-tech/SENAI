let nome  = "vitória"
let idade = 15
let altura = 1.64
let peso = 64

let imc = peso / (altura * altura)

let maiorDeIdade = idade >= 18
let imcAbaixo25 = imc < 25
let nomeValido = nome.length > 3

console.log(`Olá, ${nome}!`)
console.log(`Seu IMC é ${imc.toFixed(1)}`)
console.log(`Maior de idade? ${maiorDeIdade}`)
console.log(`IMC abaixo de 25? ${imcAbaixo25}`)
console.log(`Nome tem mais de 3 letras? ${nomeValido}`)