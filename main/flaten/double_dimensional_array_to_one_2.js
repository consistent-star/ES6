'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let newcollection=collection.reduce((pre,cur)=>{
    return pre.concat(cur);
  },[])
  return [...new Set(newcollection)];
}

module.exports = double_to_one;
