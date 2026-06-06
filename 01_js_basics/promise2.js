function testAditya(){
  let dabba=1000;
  let p = new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("After 2s...");
      dabba = 2000;
      resolve(dabba);
    },2000);
  })
  return p;
}

async function onDone(value){
  console.log(value);
}

testAditya().then(onDone);

