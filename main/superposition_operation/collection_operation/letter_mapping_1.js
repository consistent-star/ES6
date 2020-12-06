'use strict';

function even_to_letter(collection) {

  //在这里写入代码
 collection= collection.filter(x=>{
   if(x%2==0){
     return x;
   }
 });
 return collection.map(x=>(String.fromCharCode(x+96)));
}

module.exports = even_to_letter;
