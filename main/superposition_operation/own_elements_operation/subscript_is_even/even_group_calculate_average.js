'use strict';
var even_group_calculate_average = function(collection){
  var a=[];
  var b1=[];
  var b2=[];
  var b3=[];
  var c=[];
  collection.map((x,index)=>{
      if(index%2!=0&&x%2==0){
          a.push(x);
      }
  })
  var i=0;
  var j=0;
  var k=0;
  if(a.length!=0){
       a.map(x=>{
    if(parseInt(x/10)==0){
        b1.push(x);
        i=i+x;
    }
    else if(String(x).length==2){
        b2.push(x);
        j=j+x;
    }
    else if(String(x).length==3){
        b3.push(x);
        k=k+x;
    }
  })
  i=i/b1.length;
  j=j/b2.length;
  k=k/b3.length;
  if(b1.length!=0){
      c.push(i);
  }
  if(b2.length!=0){
    c.push(j);
  }
 if(b3.length!=0){
     c.push(k);
 }
  
  return c;
  }
  else{
      return [0];
  }
 
};
module.exports = even_group_calculate_average;
