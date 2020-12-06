function count_same_elements(collection) {
  //在这里写入代码
  var elements=[];
  let j=1;
  var t=0;
 for(let i=0;i<collection.length;i++){
   if(collection[i]==collection[i+1]){
      j++;
      continue;
   }
   else{
     elements[t]={
       key:collection[i],
       count:j
     }
     j=1;
     t++;
     
   }
 }
 return elements;
}

module.exports = count_same_elements;
