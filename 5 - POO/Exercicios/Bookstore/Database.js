module.exports = class Database {
    #storage = {
        autores: [],
        livros: [],
        posters: [],
        pedidos: [],
        usuarios: []
    }

    find(key) {
        return this.#storage[key]
    }

    salvarAutor(autor) {
        this.#storage.autores.push(autor)
    }

    acharLivroPorNome(nomeLivro) {
        return this.#storage.livros.find(l => l.nome === nomeLivro)
    }

    salvarLivro(livro) {
        const livrosExistentes = this.acharLivroPorNome(livro.nome)
        if (!livrosExistentes) {
            this.#storage.livros.push(livro)
        }
    }

    adicionarLivrosAoEstoque(nomeLivro, quantidade) {
        const livro = this.acharLivroPorNome(nomeLivro)
        livro?.adicionarLivrosAoEstoque(quantidade)
    }

    removerLivroDoEstoque(nomeLivro, quantidade) {
        const livro = this.acharLivroPorNome(nomeLivro)
        livro?.removerLivroDoEstoque(quantidade)
    }

    acharPosterPorNome(nomePoster) {
        return this.#storage.posters.find(p => p.nome === nomePoster)
    }

    salvarPoster(poster) {
        const postersExistentes = this.acharPosterPorNome(poster.nome)
        if (!postersExistentes) {
            this.#storage.posters.push(poster)
        }
    }

    adicionarPostersAoEstoque(nomePoster, quantidade) {
        const poster = this.acharPosterPorNome(nomePoster)
        poster?.adicionarPostersAoEstoque(quantidade)
    }

    removerPosterDoEstoque(nomePoster, quantidade) {
        const poster = this.acharPosterPorNome(nomePoster)
        poster?.removerPosterDoEstoque(quantidade)
    }

    salvarUsuario(usuario) {
        const usuariosExistentes = this.#storage.users.find(u => u.email === usuario.email)
        if (!usuariosExistentes) {
            this.#storage.usuarios.push(usuario)
        }
    }

    salvarPedidos(pedido) {
        this.#storage.pedidos.push(pedido)
    }

    mostrarStorage() {
        console.table(this.#storage.autores)
        console.table(this.#storage.livros)
        console.table(this.#storage.posters)
        console.table(this.#storage.usuarios)
        console.table(this.#storage.pedidos.map(pedido => pedido.data))
    }
}