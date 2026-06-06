const fs = require('fs');

function reader(path){
  return new Promise((resolve)=>{
    fs.readFile(path, 'utf-8', (err,data)=>{
      resolve(data);
    })
  })
}

const data = reader('./test.txt').then((response)=>{
    const result = response.split(/[ \n]+/).filter((item)=>item!='').join(" ");
    console.log(result);
    writer('./test.txt', result);
    return result;
})


function writer(path,data){
  return new Promise((resolve)=>{
    fs.writeFile(path,data,'utf-8', (err)=>{
      if(err){
        console.log(err);
      }
      resolve();
    })
  })
}


// Testing 

// text = " This      is   random ass               text  with spaces"
// resp = text.split(" ").filter(item=> item != '').join(" ")
// console.log(text);
// console.log(resp);
