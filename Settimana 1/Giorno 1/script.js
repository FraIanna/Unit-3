"use strict";
class User {
    constructor(nome, cognome, credit = 0, callNumbers = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credit = credit;
        this.callNumbers = callNumbers;
    }
    phoneTopUp(amount) {
        this.credit += amount;
    }
    call(minutes) {
        const callPrice = minutes * 0.2;
        if (this.credit >= this.callNumbers) {
            this.callNumbers += minutes;
            this.credit -= callPrice;
        }
        else {
            console.log("Error, your remaining credit is insufficient");
        }
    }
    call404() {
        return this.credit;
    }
    getCallNumbers() {
        return this.callNumbers;
    }
    resetCall() {
        this.callNumbers = 0;
    }
}
const User1 = new User("Mario", "Rossi");
User1.phoneTopUp(10);
User1.call(50);
console.log("Current credit: " + User1.call404());
console.log("Amount of calls: " + User1.getCallNumbers());
User1.call(10);
console.log("Current credit: " + User1.call404());
User1.resetCall();
console.log(User1.getCallNumbers());
