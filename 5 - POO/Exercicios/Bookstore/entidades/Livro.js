const Produto = require("./Produto");

module.exports = class Livreo extends Produto {
    constructor(titulo, sinopse, genero, qtdPaginas, autor, descricao, preco, qtdEstoque = 0) {
        super(`Livro: ${titulo}`, descricao, preco, qtdEstoque)
        this.titulo = titulo
        this.sinopse = sinopse
        this.genero = genero
        this.qtdPaginas = qtdPaginas
        this.autor = autor
    }
}