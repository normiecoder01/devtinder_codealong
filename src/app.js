const express = require("express")


const app = express()
http://localhost:6969/user/007/normiecoder/true
// or
// http://localhost:6969/user/007/normiecoder/
// By putting the incognito in curly braces, we have made it optional

app.get("/user/:userId/:username{/:incognito}",(req , res) =>{
    res.send(req.params)
})

// http://localhost:6969/user/?userId=007&username=normiecoder
// clearly everything is optional here
app.get("/user",(req , res) =>{
   res.send(req.query) 
})

app.get("/user",(req , res) =>{
    res.send("Assume this is some user data")
})


app.use("/hello", (req, res)=>{
    res.send("Hello from the server")
})

app.use((req , res) =>{
    res.send("Ram ram ji sareyane")
})


app.listen(6969 , ()=>{
    console.log("Jao jao browser pe jao, The server's up")
})