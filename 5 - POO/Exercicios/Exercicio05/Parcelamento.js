module.exports = class Parcelamento {
    constructor(valorParcela, numParcela, situacao = 'pendente') {
        this.valorParcela = valorParcela
        this.numParcela = numParcela
        this.situacao = situacao
    }
}