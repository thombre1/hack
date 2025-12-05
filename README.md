<details>
<summary>Week 1</summary>
Learned about the 
- Date[new Date(), getTime,getHours(),getFullYear(), setFullYear()] 
- JSON[ JSON.parse(), JSON.stringify() ] 
- Object[ Object.keys() , Object.values(), Object.entries()]
- Class[ constructor, static, and dont declare the function with the keyword just write its name ]
- `setTimeout()` is a sync function - that it will be allocated to a separate thread and the sync functions will continue to be executed - while the timeout goes on
- The idea is that sync functions will go onto stack get executed and async function go to callback queue and wait till all the sync fucntion get executed, then one by one the queue functions get onto stack and executed
- (Stack fills up if the function calls another function or itself(recursion))
</details>


<details>
<summary>Week 2</summary>
To be learnt with do as you go
- Syntax of async-await, Promises, callback function 
- resolve() and .then() for promise
- callback generally has (req,res) and if multiple callbacks are chained together in series then (req,res,next)
- if its an error callback then has (err,req,res) and chained together they have (err,req,res,next)

</details>

<details>
<summary>Week 3</summary>
- Middlewares, write functions that can be used to do some thingy (basically avoiding DRY code)
- zod is a middlware use to check if the user has sent data in expected format(like string then string, number then number), used methods like schema.parse()/datatype.parse() and schema.safeParse()/datatype.safeParse()
- safeParse() wont bug the code into stopping and send an object with the 'success' value set to 'true' or 'false'
- parse() would just give error, more suitable to be used in try...catch

- what we send in headers can be requested like `req.headers.username` 
- what we send in the query params can be requested with `req.query.kidneyID`
- app.use(express.json()) is used to tell that the body will be in json format to the server    

### Authentication
- Hashing is taking a simple string like password and useing a hash function to make it into something which cant be reversed , the passwords are checked when user inputs it again the same hash is created for same password string and then compared to the one stored in the DB - One way
- Encryption is similar to hashing but can be decrypted with the help of a password - two way
- Basic use of jwt, include it in the top using `require` and then use it to `sign`(encode) and `verify(can't say decode as such but yeah somehing like that
- `const token = jwt.sign(password,SECRET_KEY)` and `jwt.verify(token, SECRET_KEY, function(err,username){})`
</details>
