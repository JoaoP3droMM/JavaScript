const App = require('./App')

App.criarUsuario('email@email.com', 'JP')
App.criarUsuario('emailFTQ@emailFTQ.com', 'GUGU')
App.criarUsuario('emailFTQM@emailFTQM.com', 'MT')

App.deposito('email@email.com', 100)
App.transferencia('email@email.com', 'emailFTQ@emailFTQ.com', 20)

App.mudarTaxaEmprestimo(10)
App.pegarEmprestimo('emailFTQM@emailFTQM.com', 2000, 24)

console.log(App.acharUsuario('email@email.com'));
console.log(App.acharUsuario('email@email.com').conta);
console.log(App.acharUsuario('emailFTQ@emailFTQ.com'));
console.log(App.acharUsuario('emailFTQ@emailFTQ.com').conta);
console.log(App.acharUsuario('emailFTQM@emailFTQM.com'));
console.log(App.acharUsuario('emailFTQM@emailFTQM.com').conta);
console.log(App.acharUsuario('emailFTQM@emailFTQM.com').conta.emprestimos[0].qtdParcelas);