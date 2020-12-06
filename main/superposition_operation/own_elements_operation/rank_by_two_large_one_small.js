'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var a=[];
 function compare(a,b){
   return a-b;
 }
 collection= collection.sort(compare);
 var len =parseInt(collection.length/3);
 for(let i=0;i<len*3;i=i+3){
     a.push(collection[i+1]);
     a.push(collection[i+2]);
     a.push(collection[i]);
 }
 a.push(collection[collection.length-2]);
 a.push(collection[collection.length-1]);
 return a;
}
module.exports = rank_by_two_large_one_small;
