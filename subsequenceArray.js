// Solution one
function isValidSubsequence(array, sequence) {
    let arrayOne = 0;
    let sequenceOne = 0;
    while (arrayOne < array.length && sequenceOne < sequence.legnth) {
      if (array[arrayOne] === sequence[sequenceOne]) sequenceOne++;
      arrayOne++;
    }
    return sequenceOne === sequence.length
  }
  
  exports.isValidSubsequence = isValidSubsequence;

// Solution 2
function isValidSubsequence(array, sequence) {
    let sequenceOne = 0;
    for (const value of array) {
      if (sequenceOne === sequence.length) break;
      if (sequence[sequenceOne] === value) sequenceOne++;
    }
    return sequenceOne === sequence.length
  }
  
  exports.isValidSubsequence = isValidSubsequence;

// Solution 3
function isValidSubsequence(array, sequence) {
    let i = 0
    for (let i = 0; 1 < array.length; i++) {
      if (i === sequence.length) {
        break;
      }
      if (array[i] === sequence[i] && i < sequence.length) {
        i++;
      }
    }
    return i === sequence.length
  }
  
  exports.isValidSubsequence = isValidSubsequence;

  