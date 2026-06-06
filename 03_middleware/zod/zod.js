const express = require("express");
const app  = express();

const zod = require ("zod");
const schema = zod.array(zod.number());
const textSchema = zod.array(zod.string());

const objectSchema = zod.object({
	"email": zod.string().email(),
	"password": zod.string().min(8)
});



//required for req.body(), we dont know what format the body will be in and thus we specify that the user is supposed to send the body in json format
app.use(express.json());

app.post("/health-checkup", function (req,res){
	const kidneys = req.body.kidneys;
	const response = schema.safeParse(kidneys);
	res.json({
		response
	})
});

app.post("/object-text", function (req,res){
	const myObj = req.body.myObj;
	res.json(objectSchema.safeParse(myObj));
})


app.post("/text-check",function (req,res){
	const text = req.body.text;
	console.log(text);
	const response = textSchema.safeParse(text);
		console.log(response);
	if(response.success && response.data.length>=1){
		res.send("True");
	}
})

app.listen(3000);
