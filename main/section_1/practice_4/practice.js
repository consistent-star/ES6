function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
 let arr=new Array();
 arr=object_b.value;
 var set1=new Set(arr);

 let arr1=new Array();
 for(let i =0;i<collection_a.length;i++){
   arr1[i]=collection_a[i].key;
 }
 var set2=new Set(arr1);
 return [...set2].filter(x=>set1.has(x));
}

module.exports = collect_same_elements;
