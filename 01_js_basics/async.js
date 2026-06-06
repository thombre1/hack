const fs = require ('fs');

console.log("Before readFile");
fs.readFile('./test.txt', 'utf-8', (err, data)=>{
  if(err){
    console.error(err);
    return;
  }
  console.log(data);
})
console.log("After readFile");


//Trying to fetch 

async function fetchData(){
  try{
    const response = await fetch("http://localhost:5000/ping")
    const data = await response.json();
    console.log(data);
  }
  catch(err){
    console.error(err);
  }
}

console.log('Before fetchData');
fetchData();
console.log('After fetchData');
