import BankAccountSpec from '../Interfaces/BankAccountSpec';
import KeySpec from '../Interfaces/KeySpec'

class Database {

  bankAccounts: BankAccountSpec[] = [];

  constructor() {}

  insert(account: BankAccountSpec): boolean {
    const foundDuplicate = this.find(account.getKey());
    if(Boolean(foundDuplicate)) return false;

    this.bankAccounts.push(account);
    return true;
  };

  find(key: KeySpec): BankAccountSpec | undefined {
    return this.bankAccounts.find(account => account.getKey().equals(key));
  }

  delete(key: KeySpec): boolean {
    const found = this.find(key);  
    this.bankAccounts = this.bankAccounts.filter(account => !account.getKey().equals(key));
    return Boolean(found);
  }
}

export default Database;