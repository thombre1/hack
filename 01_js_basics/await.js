function somethingPromise(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 1000);
  })
}


async function randomAss(){
  console.log("Before we get started...");
  const response = await somethingPromise();
  console.log("After we are done");
  
}

randomAss();
