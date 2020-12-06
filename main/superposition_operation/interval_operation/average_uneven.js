'use strict';

function average_uneven(collection) {

  //在这里写入代码
 let sum=0;
 let c=0;
 collection.map(x=>{
   if(x%2!=0){
     sum=sum+x;
     c++;
   }
 })
 return sum/c;
}

module.exports = average_uneven;
