'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let sum=0;
 collection=collection.filter(x=>(x%2!=0));
 collection.map(x=>{
  x=x*3+5;
  sum=sum+x;
 })
  return sum;
}

module.exports = hybrid_operation_to_uneven;

