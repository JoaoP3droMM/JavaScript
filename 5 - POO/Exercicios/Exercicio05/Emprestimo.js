module.exports = class Emprestimo {
    #taxaJuros

    constructor(valorEmprestimo, dataCriacao, parcelas, numParcelas = 0) {
        this.valorEmprestimo = valorEmprestimo
        this.dataCriacao = dataCriacao
        this.parcelas = parcelas
        this.numParcelas = numParcelas
        this.#taxaJuros = 0
    }

    get taxaJuros() {
        return this.#taxaJuros
    }

    set novaTaxaDeJuros(porcentagem) {
        this.#taxaJuros += (this.#taxaJuros * (porcentagem / 100))
        // this.taxa *= ((100 + porcentagem) / 100)
    }

    calcParcelas(numParcelas) {
        
    }
}