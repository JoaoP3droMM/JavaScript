module.exports = class Transferencia {
    constructor(usuarioEnviou, usuarioRecebeu, valor) {
        this.usuarioEnviou = usuarioEnviou
        this.usuarioRecebeu = usuarioRecebeu
        this.valor = valor
        this.dataCriacao = new Date()
    }
}