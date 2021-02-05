import BankAccountSpec from '../Interfaces/BankAccountSpec';
import KeySpec from '../Interfaces/KeySpec'

class BankAccount implements BankAccountSpec {
  key: KeySpec;
  balance: number;

  constructor(balance: number, key: KeySpec) {
    this.key = key;
    this.balance = balance;
  }

  deposit(amount: number) : boolean {
    if(amount < 0) return false;

    this.balance += amount;
    return true;
  }

  getKey(): KeySpec {
    return this.key;
  }

  getBalance(): number {
    return this.balance;
  }
}

export default BankAccount;