function count_same_elements(collection) {
  //在这里写入代码
  var str =[];
  var n=1;
  for(let i=0;i<collection.length;i++){
    if(collection[i].length!=1){
      let s=collection[i];
      str.push(collection[i]);
      collection[i]=s[0];
      n++;
    }
  }
  var elements=[];
  let j=1;
  let t=0;
  for(let i=0;i<collection.length;i++){
      if(collection[i]==collection[i+1]){
        j++;
        continue;
      }
      else{
        elements[t]={
          name:collection[i],
          summary:j
        }
        t++;
        j=1;
      }
    }
    for(let i=0;i<str.length;i++){
      let c=str[i].split('-');
      for(let j=0;j<elements.length;j++){
        if(elements[j].name==c[0]){
          let w=elements[j].summary;
          elements[j].summary=parseInt(c[1])+w-1;
        }
      }
    }
    for(let i=0;i<str.length;i++){
      let c=str[i].split(':');
      for(let j=0;j<elements.length;j++){
        if(elements[j].name==c[0]){
          let w=elements[j].summary;
          elements[j].summary=parseInt(c[1])+w-1;
        }
      }
    }
    var a=[];
    for(let i=0;i<str.length;i++){
      if(str[i].length>3){
        a.push(str[i]);
      }
    }
    for(let i =0;i<a.length;i++){
      let c=a[i].split('[');
      let d=c[1].split(']');
      for(let j=0;j<elements.length;j++){
        if(elements[j].name==c[0]){
          let w= elements[j].summary;
          elements[j].summary=parseInt(d[0])+w-1;
        }
      }

    }
  
  return elements;
}

module.exports = count_same_elements;
