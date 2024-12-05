class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string' ) {
            this.#username = newUsername
        } else {
            console.log('o nome de usuario precisa ser do tipo string');
        }
        
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount);

myWallet.username = 'João Pedro'
console.log(myWallet.username);

myWallet.username += ' Mourão Marques'
console.log(myWallet.username);

myWallet.username = true
console.log(myWallet.username);