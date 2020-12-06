'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let b1=new Set(collection_b);
  return collection_a.filter(x=>(!b1.has(x)));
}

module.exports = choose_no_common_elements;
