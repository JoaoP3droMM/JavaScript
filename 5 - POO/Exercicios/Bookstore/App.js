const Database = require("./Database")
const Autor = require("./entidades/Autor")
const Livro = require("./entidades/Livro")
const Pedido = require("./entidades/Pedido")
const Poster = require("./entidades/Posteres")
const Usuario = require("./entidades/Usuario")

module.exports = class App {
    static #database = new Database()

    createUser(nome, email, senha) {
        const user = new Usuario(nome, email, senha)
        App.#database.salvarUsuario(user)
    }

    getUsuarios() {
        App.#database.find('usuarios')
    }

    criarAutor(nome, nacionalidade, bio) {
        const author = new Autor(nome, nacionalidade, bio)
        App.#database.salvarAutor(author)    
    }

    getAutores() {
        App.#database.find('autores')
    }

    criarLivro(titulo, sinopse, genero, qtdPaginas, autor, descricao, preco, qtdEstoque) {
        const livro = new Livro(titulo, sinopse, genero, qtdPaginas, autor, descricao, preco, qtdEstoque)
        App.#database.salvarLivro(livro)
    }

    getLivros() {
        App.#database.find('livros')
    }

    criarPoster(nome, descricao, altura, largura, preco, qtdEstoque) {
        const poster = new Poster(nome, descricao, altura, largura, preco, qtdEstoque)
        App.#database.salvarPoster(poster)
    }

    getPosters() {
        App.#database.find('posters')
    }

    criarPedido(itens, usuario) {
        const order = new Pedido(itens, usuario)
        App.#database.salvarPedidos(order)
        order.data.itens.forEach(({ produto, quantidade }) => {
            if (produto instanceof Livro) {
                App.#database.removerLivroDoEstoque(produto.nome, quantidade)
            } else if (produto instanceof Poster) {
                App.#database.removerPosterDoEstoque(produto.nome, quantidade)
            }
        });
    }

    getPedidos() {
        App.#database.find('pedidos')
    }

    showDatabase() {
        App.#database.mostrarStorage()
    }
}