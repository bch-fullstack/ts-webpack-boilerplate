import KeySpec from '../Interfaces/KeySpec';

class Key implements KeySpec {

  numericalKey: number;

  constructor(num: number) {
    this.numericalKey = num;
  }

  equals(sample: KeySpec): boolean {
    return sample.toNumber() === this.numericalKey;
  }

  toNumber(): number {
    return this.numericalKey;
  }  
}

export default Key;