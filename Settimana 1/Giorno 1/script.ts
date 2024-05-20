interface smartphone {
  credit: number;
  callNumbers: number;
}

class User implements smartphone {
  constructor(public nome: string, public cognome: string, public credit = 0, public callNumbers = 0) {}
  phoneTopUp(amount: number): void {
    this.credit += amount;
  }
  call(minutes: number): void {
    const callPrice = minutes * 0.2;
    if (this.credit >= this.callNumbers) {
      this.callNumbers += minutes;
      this.credit -= callPrice;
    } else {
      console.log("Error, your remaining credit is insufficient");
    }
  }
  call404(): number {
    return this.credit;
  }
  getCallNumbers(): number {
    return this.callNumbers;
  }
  resetCall(): void {
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
