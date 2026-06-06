const fs = require ('fs');

function chai(){
  return new Promise((resolve)=>{
    fs.readFile('./test.txt', 'utf-8',(err,data)=>{
      resolve(data);
    })
  })
}

function chaiReturn(data){
  console.log(data);
  return data;

}

const response = chai().then(chaiReturn);
console.log(response);
