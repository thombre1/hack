const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'Aditya1';

app.use(express.json());


app.post('/signin',function (req,res){
	const {username, password}= req.body;
	if(!username){
		res.status(400).json({msg: "username is empty!"})
	}
	const token = jwt.sign(username, SECRET_KEY);
	res.status(200).send(token);

})

app.listen(3000,()=>{console.log("listening")});
