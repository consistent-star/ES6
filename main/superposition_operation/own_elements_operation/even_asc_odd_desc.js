'use strict';
var even_asc_odd_desc = function(collection){
  let collection_a=[];
  let collection_b=[];
  collection.map(x=>{
      if(x%2==0){
          collection_a.push(x);
      }
      else{
          collection_b.push(x);
      }
  })
  function compare(a,b){
    return   a-b;
  }
  collection_a=collection_a.sort(compare);
  collection_b=collection_b.sort(compare);
  collection_b=collection_b.reverse();
  return collection_a.concat(collection_b);
};
module.exports = even_asc_odd_desc;
