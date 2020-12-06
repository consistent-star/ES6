'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var a=new Array();
  collection.reduce((pre,cur,index)=>{
    if(cur%2==0){
      a.push(cur);
    }
  })
  return a[0];
}

module.exports = find_first_even;

