class Personagem {
    constructor(nome, pv, patq, pdef) {
        this.nome = nome
        this.pv = pv
        this.patq = patq
        this.pdef = pdef
    }

    atacar(perAlvo) {
        return perAlvo.pv -= this.patq - perAlvo.pdef
    }
}

class Thief extends Personagem {   
    atacar(perAlvo) {
        return perAlvo.pv -= (this.patq - perAlvo.pdef) * 2
    }
}

class Mage extends Personagem {
    constructor(magia, nome, pv, patq, pdef) {
        super(nome, pv, patq, pdef)
        this.magia = magia
    }

    atacar(perAlvo) {
        return perAlvo.pv -= (this.patq + this.magia) - perAlvo.pdef
    }

    curar(perAlvo) {
        return perAlvo.pv += this.magia * 2
    }
}

class Warior extends Personagem {
    constructor(pEscudo, nome, pv, patq, pdef) {
        super(nome, pv, patq, pdef)
        this.pEscudo = pEscudo
        this.posicao = 'defesa'
    }

    atacar(perAlvo) {
        if (this.posicao === 'ataque') {
            super.atacar(perAlvo)
        } else {
            console.log('Você não está em posição de ataque!');
        }
    }

    mudarPosicao() {
        if (this.posicao === 'ataque') {
            this.posicao = 'defesa'
            this.pdef += this.pEscudo
            console.log('Sua posição mudou para defesa');
        } else {
            this.posicao = 'ataque'
            this.pdef -= this.pEscudo
            console.log('Você está em posição de ataque');
        }
    }
}

module.exports = { Mage, Warior, Thief, Personagem }