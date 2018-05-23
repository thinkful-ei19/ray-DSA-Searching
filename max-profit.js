'use strict';
function maxProfit(array) {
//   let sum = 0;
  let minNum = array[0];
  let index = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i] < minNum) {
      minNum = array[i];
      index = i;
    }
  }
  let maxNum = array[index];
  for(let x = index; x < array.length; x++) {
    if(maxNum < array[x]) {
      maxNum = array[x];
    }
  }
  return maxNum - minNum;
}


  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));