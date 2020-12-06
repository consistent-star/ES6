'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
 var arr=collection.split("->");
 var arr = arr.map(function(value,index,array){
  return (parseInt(value));
});
 function compare(a,b){
   return a-b;
 }
 arr=arr.sort(compare);
 var len=arr.length;
 var m=len/2;
 var f=0;
 arr.reduce(function(pre,cur,index,array){
   if(index==m-1){
     if(len%2==1){
       f=cur;
     }
     else{
       f=(cur+arr[index+1])/2.0;
     }
   }
   
 })
 return f;
 /*var arr = collection.split("->");
  //字符数组变数字数组
  var arr = arr.map(function(value,index,array){
      return (parseInt(value));
  });
  //排序
  function compare(a, b){
      return a - b;
  }
  arr = arr.sort(compare);
  
  var len = arr.length;
  var g=len/2;
  var f=0;
  arr.reduce(function(pre,cur,index,array){
    if(index==g)
    {
       if(len%2==1)
    {
      f=cur;
    }
      else
    {
      f=(cur+arr[index+1])/2.0;
    }
    }
   
  })
  return f;*/
}

module.exports = compute_chain_median;
