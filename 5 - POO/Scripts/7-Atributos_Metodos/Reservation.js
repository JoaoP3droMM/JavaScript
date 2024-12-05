class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.taxaBase
    }

    static taxaBase = 150

    static mostrarTaxaBase() {
        console.log(`A taxa é ${Reservation.taxaBase}`);
    }

    static get taxaPremium() {
        return Reservation.taxaBase * 1.5
    }
}

Reservation.mostrarTaxaBase()

const r1 = new Reservation(3, '201', 5)
console.log(r1);

Reservation.taxaBase = 200

const r2 = new Reservation(2, '104', 2)
console.log(r2);

console.log(`A taxa premium é ${Reservation.taxaPremium}`);