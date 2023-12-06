// O(n^2) time / 0(1) space
// FOR LOOP SOLUTION
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length -1; i++) {
      const firstNum = array[i];
      for (let j = i + 1; j < array.length; j++) {
        const secondNum = array[j];
        if (firstNum + secondNum === targetSum) {
          return [firstNum, secondNum];
        }
      }
    }
    return[];
  }
  
  exports.twoNumberSum = twoNumberSum;

// SECOND SOLUTION

// O (nLog(n)) time / O(1) space
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      const currentsum = array[left] + array[right];
      if (currentSum === targetSum) {
        return [array[left], array[right]];
      } else if (currentSum < targetSum) {
        left ++;
      } else if (currentSum > targetSum) {
        right --;
      }
    }
    return [];
  }

exports.twoNumberSum = twoNumberSum;
  
// THREE NUMBER SUMS

// O(n^2) time / O(n) space
function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a -b);
    const threes = [];
    for (let i = 0; i < array.length -2; i++) {
      let left = i + 1;
      let right = array.length -1;
      while (left < right) {
        const currentSum = array[i] + array[left] + array[right];
        if (currentSum === targetSum) {
          threes.push([array[i], array[left], array[right]]);
          left++;
          right--;
        }else if (currentSum < targetSum) {
          left++;
        }else if (currentSum >targetSum) {
          right --;
        }
      }
    }
    return threes;
  }
  
exports.threeNumberSum = threeNumberSum;
  