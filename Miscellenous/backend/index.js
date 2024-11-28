const express = require("express")
const app= express()

const port = 3000;
app.get("/register",(req,res)=>{
    res.send(`this is backend, welcome to ${user}`)
})

app.post("/register",(req,res)=>{
    res.send(`this is backend, welcome to ${user}`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})