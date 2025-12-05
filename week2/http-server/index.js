const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
	res.send("Hello World!");
	console.log(req.body);
})

app.post('/conversations',function(req,res){
	console.log(req.body);
	res.send({
		msg:"Hello from inside an object"
	});
})

app.listen(port, ()=>{
	console.log(`Listening on port ${port}`);
})
