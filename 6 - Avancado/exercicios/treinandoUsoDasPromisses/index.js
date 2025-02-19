const calcularIMC = (peso, altura) => {
    return new Promise((resolve, reject) => {
        if (typeof peso !== "number" || typeof altura !== "number") {
            reject("Peso e altura devem ser valores numéricos!")
        } else {
            const imc = peso / (altura * altura)
            resolve(imc)
        }
    })
}

const classificarIMC = async (peso, altura) => {
    try {
        console.log("Calculando IMC...");

        const imc = await calcularIMC(peso, altura)
        console.log(`O seu IMC é: ${imc.toFixed(2)}`)

        if (imc < 18.5) {
            console.log("Situação: Magreza");
        } else if (imc < 24.9) {
            console.log("Situação: Normal");
        } else if (imc < 29.9) {
            console.log("Situação: Sobrepeso");
        } else if (imc < 39.9) {
            console.log("Situação: Obesidade");
        } else {
            console.log("Situação: Obesidade Grave");
        }
    } catch (erro) {
        console.error("Erro:", erro)
    }

    console.log("resolvendo...");
}

classificarIMC(70, 1.75) 
classificarIMC(50, 1.75)
classificarIMC("abc", 1.75)