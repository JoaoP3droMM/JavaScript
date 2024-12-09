const Parcelamento = require("./Parcelamento")

module.exports = class Emprestimo {
    static #taxaJuros = 1.05

    constructor(valorEmprestimo, qtdParcelas) {
        this.valorEmprestimo = valorEmprestimo
        this.qtdParcelas = []
        for(let i = 1; i <= qtdParcelas; i++) {
            this.qtdParcelas.push(new Parcelamento((valorEmprestimo * Emprestimo.#taxaJuros) / qtdParcelas), i)
        }
        this.dataCriacao = new Date()
    }

    get taxaJuros() {
        return Emprestimo.#taxaJuros
    }

    static set novaTaxaDeJuros(porcentagem) {
        Emprestimo.#taxaJuros = 1 + (porcentagem / 100)
        // this.#taxaJuros += (this.#taxaJuros * (porcentagem / 100))
        // this.taxa *= ((100 + porcentagem) / 100)
    }
}