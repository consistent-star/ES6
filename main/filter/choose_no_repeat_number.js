'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var set1 =new Set(collection);
  var array1=[...set1];
  return array1;
}

module.exports = choose_no_repeat_number;
