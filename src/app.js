const express = require("express")
const {adminAuth , userAuth} = require("./middlewares/auth")

const app = express()

app.use('/admin', adminAuth)

http://localhost:6969/req-param-demo/user/007/normiecoder/true
// or
// http://localhost:6969/req-param-demo/user/007/normiecoder/
// By putting the incognito in curly braces, we have made it optional

app.get("/req-param-demo/user/:userId/:username{/:incognito}",(req , res) =>{
    res.send(req.params)
})

// http://localhost:6969/query-param-demo/user/?userId=007&username=normiecoder
// clearly everything is optional here
app.get("/query-param-demo/user",(req , res) =>{
   res.send(req.query) 
})


app.get("/user", userAuth , (req , res, next) =>{
    console.log("In the first handler")
    next()
}, (req , res) =>{
    console.log("In the second handler")
    res.send("Assume this is some user data")
})


app.get("/admin/get-all-users",(req,res)=>{
    res.send("Fetched all the users data")
})

app.delete("admin/delete-user/:userId" , (req,res) =>{
    id =  req.params.userId
    res.send("Deleted the user with user id ",id)
})


app.use((req , res) =>{
    res.send("Ram ram ji sareyane")
})


app.listen(6969 , ()=>{
    console.log("Jao jao browser pe jao, The server's up")
})