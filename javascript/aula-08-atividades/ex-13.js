let frutas = ['maçã', 'banana', 'laranja', 'uva']

let frutaL = frutas.find(function(item){
    return item.startsWith("l")
})

console.log(frutaL)