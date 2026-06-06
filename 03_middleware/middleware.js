const express = require ('express');
const app = express();


// writin middleware
function userMiddleWare(req,res,next){
	const username = req.headers.username;
	const pass = req.headers.pass;
	if(username!="Aditya" || pass!="pass"){
		console.error("At userMiddleWare");
		res.status(403).json({
		"msg":"Incorrect Creds"
		});
	
	}
	next();
}

function kidneyCheck(req,res,next){
	const kidneyId = req.query.kidneyId;
	if(kidneyId != 1 && kidneyId != 2){
		res.status(404).json({"msg":"Kidney Not Found"});
	}
	next();
}

let counter = 0;

app.get("/kidney-check",userMiddleWare,kidneyCheck, function (req,res){
	res.json({"msg":"Health and Kidney is fine"});
	counter ++;
	console.log(`${counter} - Requests sent till now`);

})

app.listen(3000);



