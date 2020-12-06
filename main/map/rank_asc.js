'use strict';
var rank_asc = function(collection){
    function compare(a,b){
        return b-a;
    }
  collection=collection.sort(compare);
  return collection;
};

module.exports = rank_asc;
