'use strict';
var rank_desc = function(collection){
    function compare(a,b){
        return a-b;
    }
  collection=collection.sort(compare);
  return collection;
};

module.exports = rank_desc;
