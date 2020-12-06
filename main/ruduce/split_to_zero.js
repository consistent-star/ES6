'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var a=new Array();
  a.push(number);
  while(number>0){
    number=Math.round((number-interval)*10)/10;
    a.push(number);
  }
 return a;
}

module.exports = spilt_to_zero;
