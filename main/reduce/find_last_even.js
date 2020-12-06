'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var a=new Array();
  collection.reduce((pre,cur,index)=>{
    if(cur%2==0){
      a.push(cur);
    }
  })
  return a[a.length-1];
}

module.exports = find_last_even;
