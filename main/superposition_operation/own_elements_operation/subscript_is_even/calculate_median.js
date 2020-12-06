'use strict';
var calculate_median = function(collection){
 var a=[];
 collection.map(x=>{
     if(x%2==0){
         a.push(x);
     }
 })
 if(a.length%2!=0){
    return a[parseInt(a.length/2)];
 }
 else{
    return collection[parseInt(collection.length/2) ];
 }
};
module.exports = calculate_median;
