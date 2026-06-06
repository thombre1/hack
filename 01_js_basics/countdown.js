// Countdown
function simpleTimer(n){
  const intervalId = setInterval(() => {
    console.clear();
    console.log(n--);
    if(n<0) clearInterval(intervalId);
  }, 500);
}

// Time Difference 
function timeInBetween(n){
  return new Promise((resolve)=>{
  let sum=0;
    const start = Date.now();
    setTimeout(function(){
      for(let  i=0;i<n;i++){
      sum += i;
    }
      const end = Date.now();
      resolve (end-start);
    }, 1000);
  })
}
async function wrapperForTimeInBetween(){
    const howMuchTime = await timeInBetween(100000);
    console.log(howMuchTime);
}

// Term Clock
function terminalClock(n){
  const intervalId = setInterval(()=>{
    console.clear();
    const now = new Date();
    console.log(now.toLocaleTimeString());
    n--;
    if(n<0) clearInterval(intervalId);
  }, 1000);
}


terminalClock(10);
