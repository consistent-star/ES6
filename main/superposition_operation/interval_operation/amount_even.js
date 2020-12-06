'use strict';

function amount_even(collection) {

  //在这里写入代码
 let sum=0;
 collection.map(x=>{
   if(x%2==0){
     sum=sum+x;
   }
 })
 return sum;
}

module.exports = amount_even;
