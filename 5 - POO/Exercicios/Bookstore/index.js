const App = require('./App')
const app = new App()

app.criarAutor('J .R .R Tolkien', 'Britânico', '...')
app.criarAutor('João Pedro', 'Brasileiro', '...')

const autores = app.getAutores()

app.criarLivro('O Hobbit', '...', 'fantasia', 300, autores[0], '...', 19.99, 100)
app.criarLivro('A Sociedade do Anel', '...', 'fantasia', 400, autores[0], '...', 24.99, 100)
app.criarLivro('O Ladrão de Raios', '...', 'fantasia', 500, autores[1], '...', 24.99, 100)
app.criarLivro('A Pirâmide Vermelha', '...', 'fantasia', 600, autores[1], '...', 24.99, 100)

const livros = app.getLivros()

app.createUser('Jp', 'jp@email.com', '123456')

const usuarios = app.getUsuarios()

app.showDatabase()

const itens = [
    {
        produto: livros[0],
        quantidade: 2
    }
]

app.criarPedido(itens, usuarios[0])
app.showDatabase()