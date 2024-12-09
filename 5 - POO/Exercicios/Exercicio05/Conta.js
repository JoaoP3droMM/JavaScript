module.exports = class Conta {
    #saldo
    // #depositos
    // #emprestimos
    // #transferencias

    constructor(usuario) {
        this.usuario = usuario
        this.#saldo = 0
        this.depositos = []
        this.emprestimos = []
        this.transferencias = []
    }

    get saldo() {
        this.#saldo
    }

    addDeposito(deposito) {
        this.#saldo += deposito.valor
        this.depositos.push(deposito)
    }

    addEmprestimo(emprestimo) {
        this.#saldo += emprestimo.valor
        this.emprestimos.push(emprestimo)
    }

    addTransferencia(transferencia) {
        if(transferencia.usuarioRecebeu.email === this.usuario.email) {
            this.#saldo += transferencia.valor
            this.transferencias.push(transferencia)
        } else if (transferencia.usuarioEnviou.email === this.usuario.email) {
            this.#saldo -= transferencia.valor
            this.transferencias.push(transferencia)
        }
    }
}