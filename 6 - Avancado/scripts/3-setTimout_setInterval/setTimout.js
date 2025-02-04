// Função que serve para criarmos um temporizador. Espere 3 segundos e imprima uma mensagem no console

console.log('Programa iniciado!')

const timoutID = setTimeout(() => {
    console.log('3 segundos se passaram des de que o programa foi iniciado.')
}, 1000 * 3)

// Exclui o temporizador
clearTimeout(timoutID)
