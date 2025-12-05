const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let todos = [];

app.get("/todos", function (req,res){
	res.json(todos);
});

app.post("/todos", function (req,res){
	const todo = {	id: todos.length + 1,
	title: req.body.title,
	completed: req.body.completed || false,
	};

	todo.push(todo);
	res.status(201).json(todo);
});


app.put("/todos/:id", function (req,res){
	const id = parseInt(req.params.id);
	const todo = todos.find((t) => t.id === id);
	if(!todo){
		return res.status(404).json({error: "Todo not found"});
		}
	todo.title = req.body.title || todo.title ; 
	todo.completed =  req.body.completed || todo.completed;
	res.json(todo);
	});

app.delete("/todo", function (req,res){
	const id = parseInt(req.params.id);
	const index = todos.findIndex((t) => t.id === id);
	if(index === -1) {
		return res.status(404).json({error: "Todo not found"});
	}
	todos.splice(index, 1);
	res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log(`Server is running at port: ${PORT}`);
});
