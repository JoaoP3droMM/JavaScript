module.exports = class Transferencia {
    constructor(usuarioEnviou, usuarioRecebeu, valor, dataCriacao) {
        this.usuarioEnviou = usuarioEnviou
        this.usuarioRecebeu = usuarioRecebeu
        this.valor = valor
        this.dataCriacao = dataCriacao
    }
}