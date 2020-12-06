'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let len=collection.length;
  if(len%2!=0){
    return ('a'+String.fromCharCode(96-26+(collection[len/2])));
  }
  else{
    return ('a'+String.fromCharCode(96-26+parseInt((collection[len/2]+collection[len/2+1])/2)));
  }
}

module.exports = median_to_letter;
