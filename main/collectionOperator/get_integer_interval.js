'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var a=new Array();
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      a.push(i);
    }
    return a;
  }
  else if(number_a>number_b){
    for(let i=number_a;i>=number_b;i--){
      a.push(i);
    }
    return a;
  }
  else{
    a.push(number_b);
    return a;
  }
}

module.exports = get_integer_interval;

