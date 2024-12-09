const Deposito = require("./Deposito")
const Emprestimo = require("./Emprestimo")
const Transferencia = require("./Transferencia")
const Usuario = require("./Usuario")

module.exports = class App {
    static #usuarios = []

    static acharUsuario(email) {
        const usuario = this.#usuarios.find(usuario => usuario.email === email)
        return usuario ?? null
    }

    static criarUsuario(email, nomeCompleto) {
        const usuarioExiste = App.acharUsuario(email)
        if (!usuarioExiste) {
            this.#usuarios.push(new Usuario(email, nomeCompleto))
        }
    }

    static deposito(email, valor) {
        const usuario = App.acharUsuario(email)
        if (usuario) {
            const novoDeposito = new Deposito(valor)
            usuario.conta.addDeposito(novoDeposito)
        }
    }

    static transferencia(usuarioEnviouEmail, usuarioRecebeuEmail, valor) {
        const usuarioEnviou = App.acharUsuario(usuarioEnviouEmail)
        const usuarioRecebeu = App.acharUsuario(usuarioRecebeuEmail)
        if (usuarioEnviou && usuarioRecebeu) {
            const novaTrasferencia = new Transferencia(usuarioEnviou, usuarioRecebeu, valor)
            usuarioEnviou.conta.addTransferencia(novaTrasferencia)
            usuarioEnviou.conta.addTransferencia(novaTrasferencia)
        }
    }

    static pegarEmprestimo(email, valor, qtdParcelas) {
        const usuario = App.acharUsuario(email)
        if (usuario) {
            const novoEmprestimo = new Emprestimo(valor, qtdParcelas)
            usuario.conta.addEmprestimo(novoEmprestimo)
        }
    }

    static mudarTaxaEmprestimo(porcentagem) {
        Emprestimo.taxaJuros = 1 + (porcentagem / 100)
    }
}