import Key from './Components/Key';
import Database from './Components/Database';
import BankAccount from './Components/BankAccount'

let db = new Database();

let firstKey = new Key(12345);
let firstAccount = new BankAccount(50000, firstKey);
let firstResult = db.insert(firstAccount);

let secondKey = new Key(5678);
let secondAccount = new BankAccount(10000, secondKey);
let secondResult = db.insert(secondAccount);

let thirdKey = new Key(789);
let thirdAccount = new BankAccount(0, secondKey);  // will result in 'false'
let thirdResult = db.insert(thirdAccount);

console.log('Added first account to database', firstResult); // --> true
console.log('Added second account to database', secondResult); // --> true
console.log('Added third account to database', thirdResult); // --> false

let found = db.find(thirdKey);
console.log(`Account ${found} found`)
console.log('account lookup', found)