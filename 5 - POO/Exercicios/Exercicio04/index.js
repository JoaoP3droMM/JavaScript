const Personagem = require("./Personagem")

const Merlin = new Personagem.Mage(20, 'Merlin', 8, 3, 3, 2)
const Joana = new Personagem.Thief('Joana', 30, 2, 2)
const Arthur = new Personagem.Warior(50, 'Arthur', 7, 6)

console.table({ Arthur, Joana, Merlin });

Arthur.mudarPosicao()

console.table({ Arthur, Joana, Merlin });