
// pendente - pending
// cumprida - resolved
// rejeitada - rejected
// finalizada
const p = new Promise((resolve, rejectec) => {
    console.log('A promise está sendo executada')
    setTimeout(() => {
        if (true) {
            rejectec(false)
        }
        console.log('Resolvendo a promisse...')
        resolve(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 2)