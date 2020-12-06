'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
 let sum=0;
 collection.map(x=>{
  x=x*3+2;
  sum=sum+x;
 })
 return sum;
}

module.exports = hybrid_operation;

