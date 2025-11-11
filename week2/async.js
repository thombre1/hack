function promisifiedFunction(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve("Hi there from resolve");
		},1000);
	});	
}

promisifiedFunction().then(function(value){
	console.log(value);
});
