'use strict';

function average_to_letter(collection) {

  //在这里写入代码
 let sum=collection.reduce((pre,cur)=>{
   return pre+cur;
 })
 let aver=(sum/collection.length)*10;
 if(aver%10!=0){
  aver=parseInt(aver/10) +1;
 }
 else{
   aver=aver/10;
 }
 return String.fromCharCode(aver+96);
}

module.exports = average_to_letter;

