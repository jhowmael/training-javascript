/* Exercício 5: Crie uma classe ContaBancaria.
Ela deve ter saldo e métodos depositar e sacar valores.
*/

class Account {
    balance: number = 0;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(value: number): void {
        this.balance += value;
    }

    withdraw(value: number): void {
        this.balance -= value;
    }


    displayBalance(): void {
        console.log(`Balance: ${this.balance}`);
    }
}


const account = new Account(0);
account.deposit(100);
account.deposit(50);
account.deposit(25);
account.withdraw(20);
account.displayBalance();

