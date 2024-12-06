module.exports = class Pedido {
    #total
    #itens
    #usuario

    constructor(itens, usuario) {
        itens.forEach(({ produto, quantidade }) => {
            if (quantidade > produto.qtdEstoque) {
                throw new Error('Quantidade insuficiente em estoque!')
            }
        })
        this.#itens = itens
        this.#usuario = usuario
        this.#total = itens.reduce((soma, { produto, quantidade }) => soma + (produto.preco + quantidade), 0)
    }

    get data() {
        return {
            itens: this.#itens,
            usuario: this.#usuario,
            total: this.#total
        }
    }
}