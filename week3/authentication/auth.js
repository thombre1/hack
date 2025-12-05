const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'Aditya1';

app.use(express.json());

const ALL_USERS=[
	{
		"username":"aditya1",
		"email":"adi@gmail.com",
		"password":"122345"
	},{
		"username":"roshan",
		"email":"roshan@gmail.com",
		"password":"145"
	},
	{
		"username":"badal1",
		"email":"badal@gmail.com",
		"password":"1345"
	}
]

app.post('/signin',function (req,res){
	const {username, password}= req.body;
	if(!username){
		res.status(400).json({msg: "username is empty!"})
	}
	const token = jwt.sign(username, SECRET_KEY);
	res.status(200).send(token);

})

function checkToken(req,res,next){

	const token = req.headers['authorization'];
	jwt.verify(token, SECRET_KEY, function(err,user){
		if(err){
			res.status(403);
		}
		next();
	
	});
}

app.get('/users',checkToken,function(req,res){
	res.json(ALL_USERS);
})

app.listen(3000,()=>{console.log("listening")});
