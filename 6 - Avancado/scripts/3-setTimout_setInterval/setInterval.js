// Bem parecido com settimout mas aqui executa repetidas vezes durante um intervalo

console.log('Progama iniciado!')

let seconds = 0

const intervalID = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)

    if (seconds > 10) {
        clearInterval(intervalID)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 1000 * 3)