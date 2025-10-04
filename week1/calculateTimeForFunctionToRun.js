// Calculate time required for a function to run given a n loop


function timer(n){
	const beforeDate = new Date();
	const beforeTime = beforeDate.getTime();
	let a = 0;
	for(let i = 0; i<=n;i++){
		a+=i;
	}
	const afterDate = new Date();
	const afterTime = afterDate.getTime();
	return afterTime-beforeTime;
}

console.log(timer(120));
console.log(timer(1000000));
console.log(timer(10000000));


//tryin to make a timer

function timer(){
	console.log(new Date().getTime());
}

setInterval(timer,1000);

