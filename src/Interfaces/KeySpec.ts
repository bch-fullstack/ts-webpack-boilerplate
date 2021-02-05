interface KeySpec {

  // This will compare the sample key with the current key. Any key will be able to take in sample key to compare it to itself
  // @param {KeySpec} sample target key comparison
  // @return {boolean} true if both have same num value

  equals: (sample: KeySpec) => boolean,

  // Returns numeric value of the current key
  toNumber: () => number
}

export default KeySpec;