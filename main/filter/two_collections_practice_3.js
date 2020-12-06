'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  var b=new Array();
  collection_a.filter(x=>
    {
      for(let i of collection_b){
        if(x%i==0)
        {
          b.push(x);
          break;
        }
      }
    })
    return b;
}

module.exports = choose_divisible_integer;
