const express = require('express')

const app = express();
const port = 4000;

// Uses the body sent in post request
app.use(express.json());

const users = [
  {
    "name":"John",
    "heart":[{
      "healthyHearts": false
    }]
  }
]


function sumTill(n){
  let sum = 0;
  for(let i = 0; i<=n;i++){
    sum += i;
  }
  return sum;
}

app.get('/',(req,res)=>{
  const n = req.query.n;
  const ans = sumTill(n);

  const johnsHeart = users[0].heart;
  const totalHearts = users[0].heart.length
  let healthyHearts = 0;
  for(let i = 0;i<totalHearts;i++){
    if(Object.keys(johnsHeart[i])[0] == "healthyHearts"){
      healthyHearts += 1;
    }
    
  }
  let unhealthyHearts = totalHearts - healthyHearts;
  res.json({
    "totalHearts": totalHearts,
    "healthyHearts": healthyHearts,
    "unhealthyHearts": unhealthyHearts
  })
})

app.post('/',(req,res)=>{
  const isHealthy = req.body.isHealthy;
  if(isHealthy){
    users[0].heart.push({
        "healthyHearts": isHealthy
      })
  }
  else{
 users[0].heart.push({
        "unhealthyHearts": isHealthy
   }) 
  }
  
  res.json({
    "msg": "Response Sent"
  })

})

app.put('/',(req,res)=>{
  // Just Remove unhealthyHearts one by one
  const johnsHeart = users[0].heart;
  for(let i=0; i<johnsHeart.length;i++){
    if(Object.keys(johnsHeart[i])[0] == "unhealthyHearts"){
      johnsHeart[i].unhealthyHearts = true;
      break;
    }
  }
  console.log(johnsHeart)
  res.send("Done")
})




app.listen(port,()=>{
  console.log("Server listening at port 4000")
})
