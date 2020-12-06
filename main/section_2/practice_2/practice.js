function count_same_elements(collection) {
  //在这里写入代码
  var elements=[];
  let j=1;
  let t=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i].length==1){
      if(collection[i]==collection[i+1]){
        j++;
        continue;
      }
      else{
        elements[t]={
          key:collection[i],
          count:j
        }
        t++;
        j=1;
      }
    }
    else{
      var [a,x,b]=collection[i];
      elements[t]={
        key:a,
        count:Number(b)
      }
      t++;
      j=1;
    }
  }
  return elements;
}

module.exports = count_same_elements;
