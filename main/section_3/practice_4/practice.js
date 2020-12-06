function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
 var elements=[];
 let j=1;
 let t=0;
 for(let i=0;i<collection_a.length;i++){
   if(collection_a[i].length==1){
     if(collection_a[i]==collection_a[i+1]){
       j++;
       continue;
     }
     else{
       elements[t]={
         key:collection_a[i],
         count:j
       }
       t++;
       j=1;
     }
   }
   else{
     var [a,x,b]=collection_a[i];
     elements[t]={
       key:a,
       count:Number(b)
     }
     t++;
     j=1;
   }
 }
 for(let i=0;i<elements.length;i++){
   for(let j=0;j<object_b.value.length;j++){
     if(elements[i].key==object_b.value[j]){
       let m=parseInt(elements[i].count/3);
       elements[i].count=elements[i].count-m;
     }
   }
 }
 return elements;
}

module.exports = create_updated_collection;
