// Polimorfismo consiste em chamar um método de outra classe mas modificar ela como quisermos

class Veiculo {
    move() {
        console.log('O veículo está se movendo'); 
    }
}

class Carro extends Veiculo {
    move() {
        console.log('O carro está se movendo');
    }
}

class Aviao extends Veiculo {
    move(speed) {
        console.log(`O avião está voando a ${speed} km/h`);
    }
}

class Navio extends Veiculo {
    move() {
        console.log('O Navio está navegando');
    }
}

const delorean = new Carro()
const Mirian = new Navio()
const epoch = new Aviao()

delorean.move()
Mirian.move()
epoch.move()

function start(Veiculo) {
    console.log('Iniciando um veículo...');
    Veiculo.move()
}

start(delorean)
start(Mirian)
start(epoch)