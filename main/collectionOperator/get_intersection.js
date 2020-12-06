'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let b1=new Set(collection_b);
  let a=new Set(collection_a);
  let c=new Set([...b1].filter(x=>a.has(x)));
  var collection=[...c];
  return collection;
}

module.exports = get_intersection;
