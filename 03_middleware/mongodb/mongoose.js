const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const SECRET_KEY = 'Aditya4'

app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://adityathombre1440:adityathombre1440@cluster0.q3yc3em.mongodb.net/hack")

const ALL_USERS = [
    {
        name:"coffeewala",
        email:"coffeewala@chai.com",
        password:"babu123"
    },
    {
        name:"chaiwala",
        email:"chaiwala@chai.com",
        password:"babu1323"
    },
    {
        name:"juicewala",
        email:"juicewala@chai.com",
        password:"bu123"
    }
]

/*
const Cat = mongoose.model('Cat', {name: String})
const billu = new Cat({name:"billurani"})
billu.save().then(()=> console.log("Billu bole meow!"))
*/

const User = mongoose.model('UserForHack',{username: String, email: String, password: String})
app.post('/signup',async function (req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email: email})
    if(existingUser){
        return res.status(400).send("User Already Exists!")
    }
    
    const user1 = new User({"username": username, "email": email, "password": password})
    user1.save().then(()=>console.log(`User aa gaya ${user1}`));
})

app.get('/login',function (req,res){
    const token = req.headers.authorization
    const decoded = jwt.verify(SECRET_KEY,token);
    const usernames = decoded.username;

    res.json({
        users: ALL_USERS.filter(function(iterator){
            if(iterator.username === username){
                return true;
            }
            return false;
        })
    })


})


app.listen(3000)