function findSum(n){
	let ans  = 0;
	for(let i=0; i<=n;i++){
		ans+=i;
	}
	console.log(ans);	
	return ans;
}

//busy waiting - same thread 
findSum(100000);


//async waiting - this will tell js to run this on a separate thread and run the rest on the function below
setTimeout(()=>{findSum(100)},1000);

console.log("Yop bro!");

setTimeout(() => {},1000);

//file system module
const fs = require ('fs');
//async function as reading the file might take a lot of time
fs.readFile("aditya.txt", "utf-8", function(err, data){
	console.log(data);
});
console.log("This will run before the text");
