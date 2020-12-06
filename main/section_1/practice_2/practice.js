function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection=collection_b[0];
  let set1=new Set(collection_a);
  let set2=new Set(collection);
  return [...set1].filter(x=>set2.has(x));
}

module.exports = collect_same_elements;
