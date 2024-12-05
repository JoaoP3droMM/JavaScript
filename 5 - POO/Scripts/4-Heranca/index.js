class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }
    getPricePerSqareMeter() {
        return this.price / this.area
    }
}

class House extends Property {}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse.getPricePerSqareMeter());
console.log(someHouse instanceof House);
console.log(someHouse instanceof Property);

class Apartament extends Property {
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartament('801', 100, 150000)
console.log(apt);
console.log(apt.getFloor());