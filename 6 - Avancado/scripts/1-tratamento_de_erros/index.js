function som(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('os argumentos devem ser dois números')
    }

    return firstNumber + secondNumber
}

// Tente executar, se acontecer algum erro, mostre a mensagem de: 'Um erro ocorreu'
// Depois, mostre a mensagem de erro
try {
    console.log(som(2, 9));
    console.log(som(true, 14));
    // console.log(som(undefined, 22));
    console.log(som(18, '0'));
    console.log(som(39, null));
    // console.log(som(13, 'zero'));
} catch (error){
    console.log('Um erro ocorreu');
    console.log(error.message);
} finally { // Mensagem garantida, que sempre é executada
    console.log('Calculos finalizados!');
}

console.log('Olá mundo');