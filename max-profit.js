'use strict';
function maxProfit(array) {
//   let sum = 0;
  let minSum = array[0];
  let index = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i] < minSum) {
      minSum = array[i];
      index = i;
    }
  }
  let maxSum = array[index];
  for(let x = index; x < array.length; x++) {
    if(maxSum < array[x]) {
      maxSum = array[x];
    }
  }
  return maxSum - minSum;
}


  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));