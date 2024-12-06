const Produto = require("./Produto");

module.exports = class Poster extends Produto {
    constructor(nome, descricao, altura, largura, preco, qtdEstoque = 0) {
        super(nome, descricao, preco, qtdEstoque)
            this.altura = altura
            this.largura = largura
    }
} 