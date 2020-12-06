'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var f=0;
 collection.reduce((pre,cur,index)=>{
   if(cur==element){
     f=index;
   }
 })
 return f;
}

module.exports = calculate_elements_sum;
