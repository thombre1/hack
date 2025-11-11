const express = require("express");

const app = express();

app.get("/", function (req, res){
	//1. try to request something that is not exprected to produce an error
	const result = req.body.imaginaryThingy;
	res.json({ msg: "done" });

})

// 2. custom way to handle the error

app.use(function(err, req, res, next){
// 3.use a function which expects ann error argument and that error thingy can be used to know what the error is and then tell the user in a more friendly way that, "hey thats the error..."
	res.send("Server fucked up bro... :)");
})

app.listen(3000);
