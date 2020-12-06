function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let set1=new Set(collection_a);
  let arr=new Array();
  arr=object_b.value;
  let set2=new Set(arr);
  return [...set1].filter(x=>set2.has(x));
}

module.exports = collect_same_elements;
