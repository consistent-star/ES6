'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var a=new Array();
  collection.reduce((pre,cur,index)=>{
    if(cur==element){
      a.push(cur);
    }
  })
    return a[0];
  }

module.exports = calculate_elements_sum;

