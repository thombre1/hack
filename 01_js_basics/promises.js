// [1] Promises are a fancy way or writing callbacks - is what i heard

console.log("This is a start of promise, or is it?");

const fs  = require('fs');

function somePromiseFunction(){
	// 1. returns the promise - I may or may not be able to finish this
	// default vaLue <PENDING>
		
		// 2. pass a callback in the function and which will send the return value when it arrives
		return new Promise(function(resolve){
		fs.readFile("aditya.txt","utf-8",(err,data)=>{
			resolve(data);				
		})

	}
	)
}
function someFn(data){
	console.log(data+" from the someFn");
}

// 3. The return value from the promise inside the function is accessed by chaining a .then() function which takes a function as an argument - 
// 4. the return value of the promise from that function is put into the function present inside .then()
somePromiseFunction().then(someFn);

// [2] async-await keyword



// 1. some function or API call that is supposd to take some time
function doSomethingPromise(){
	return new Promise(function(resolve){
		setTimeout(resolve("Hi from Resolve"),8000);
		}
	)};
	


async function waitForAPI(){
	let p = await doSomethingPromise();
	console.log(p);
	console.log("Lol, This will print afterward when the thing above being awaited for is fetched");
	
}

console.log("This will print before all the lag because it is sync");


