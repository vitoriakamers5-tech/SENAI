let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar']

let maiores = palavras.filter(function(item){
    return item.length > 3
})

console.log(maiores)