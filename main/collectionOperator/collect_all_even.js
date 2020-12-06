'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_b=collection.filter(x=>(x%2==0));
  return collection_b;
}

module.exports = collect_all_even;
