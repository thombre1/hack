let time = 0

function incrementCounter(){
    time++;
    console.clear();
    console.log(`${time}`);
}

setInterval(incrementCounter,1000);