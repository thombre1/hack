function someFn(){
let some = new Promise(function(resolve){
		resolve("Hello")
	});
	return some;
}

async function res(){
	const p = await someFn();
	console.log(p);
}

res();
console.log("outside the drama");
