import KeySpec from "./KeySpec";

interface BankAccountSpec {

  // Check if deposit amount is not negative. Incerease the balance w given amount. 
  // @param{number} = amount to be deposited
  // @return {void}
  deposit: (amount: number) => boolean,

  // Return the balance
  getBalance: () => number,

  // return key of the current bank account
  getKey: () => KeySpec
}
export default BankAccountSpec;
