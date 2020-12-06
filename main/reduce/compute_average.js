'use strict';

function compute_average(collection) {
  //在这里写入代码
 var sum=collection.reduce((pre,cur)=>{
   return pre+cur;
 });
 var aver=sum/collection.length;
 return aver;
}

module.exports = compute_average;

