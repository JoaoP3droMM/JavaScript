module.exports = class Produto {
    constructor(nome, descricao, preco, qtdEstoque = 0) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.qtdEstoque = qtdEstoque
    }

    addEstoque(quantidade) {
        this.qtdEstoque += quantidade
    }

    removerEstoque(quantidade) {
        this.qtdEstoque -= quantidade
    }
}