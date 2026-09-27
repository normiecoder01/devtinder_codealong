const express = require("express")


const app = express()

app.use((req , res) =>{
    res.send("Ram ram ji sareyane")
})


app.listen(6969 , ()=>{
    console.log("Jao jao browser pe jao, The server's up")
})