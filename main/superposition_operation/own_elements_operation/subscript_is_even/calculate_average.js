'use strict';
var calculate_average = function(collection){
 var a=[];
 collection.map(x=>{
     if(x%2==0){
         a.push(x);
     }
 })
 var sum=a.reduce((pre,cur)=>{
     return pre+cur;
 })
 return sum/a.length;
};
module.exports = calculate_average;
