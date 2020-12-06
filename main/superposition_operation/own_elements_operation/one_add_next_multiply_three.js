'use strict';
function one_add_next_multiply_three(collection){
  var c=[];
  collection.reduce((pre,cur)=>{
    let m=(pre+cur)*3;
    c.push(m);
    return cur;
  })
  return c;
}
module.exports = one_add_next_multiply_three;
