'use strict';

function compute_median(collection) {
  //在这里写入代码
 function compare(a,b){
   return a-b;
 }
 collection=collection.sort(compare);
 var num=collection.length;
 var m=parseInt(num/2) ;
 var f=0;
 collection.reduce(function(pre,cur,index){
      if(m-1==index){
        if(num%2==1){
          f=collection[m];
        }
        else{
          f=(cur+collection[index+1])/2.0;
        }
      }
 })
 return f;
}

module.exports = compute_median;


