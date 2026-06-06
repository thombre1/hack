const fs = require('fs');

function modify(path){
  return new Promise((resolve)=>{
    fs.readFile(path,'utf-8', (err,data)=>{
      const res = data.split(/[\s+\n]+/).join(" ");
      console.log(res);
      fs.writeFile(path,res,'utf-8',(err)=>{
        if(err){
          console.log(err);
        }
      })
    })
  })
}
modify('./test.txt').then()
