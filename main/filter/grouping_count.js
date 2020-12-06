'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let list=collection.reduce((pre,cur)=>{
    if(cur in pre){
      pre[cur]++;
    }
    else{
      pre[cur]=1;
    }
    return pre;
  },{});
  return list;
}

module.exports = grouping_count;
