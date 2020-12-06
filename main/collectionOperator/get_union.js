'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var a=new Set(collection_b);
  var b=new Set(collection_a);
 var set1=new Set([...b,...a]);
 var collectionc=[...set1];
 return collectionc;
}

module.exports = get_union;

