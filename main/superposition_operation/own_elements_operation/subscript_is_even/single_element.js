'use strict';
var single_element = function(collection){
  var a=[];
  var b=[];
  collection.map((x,index)=>{
      if(index%2!=0){
          a.push(x);
      }
  })
  a.map((x,index)=>{
      let f=0;
      for(let i=0;i<index;i++){
            if(x==a[i]){
                f=1;
                b.pop(x);
            }
      }
      if(f==0)
      b.push(x);
  })
  return b;
};
module.exports = single_element;
