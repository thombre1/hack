import express from "express"
import cors from "cors"
const app = express();
app.use(cors())

app.get('/sum',function(req,res){
    const num1 = parseInt(req.query.a);
    const num2 = parseInt(req.query.b);
    const result = num1+num2;
    res.send(String(result));

})

app.listen(3000,()=>console.log("listening"))