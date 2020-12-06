'use strict';
var is_exist_element = function(collection,element){
    var a=[];
  collection.map((x,index)=>{
    if(index%2==0){
        a.push(x);
    }
  })
  var f=0;
  a.map(x=>{
      if(x==element){
          f=1;
      }
  })
  return Boolean(f);
};
module.exports = is_exist_element;
