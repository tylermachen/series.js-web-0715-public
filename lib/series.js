'use strict';

function Series(numStr){
  this.digits = numStr.split('').map(Number);
};

Series.prototype.slices = function(chunkSize){
  var newArray = [];
  if (chunkSize <= this.digits.length){
    for (var i = 0; i <= this.digits.length - chunkSize; i++){
      newArray.push(this.digits.slice(i, chunkSize + i));
    }
  }
  else {
    throw new Error('Slice size is too big.');
  }
  return newArray;
}
