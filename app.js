const express= require ( 'express')
const res = require('express/lib/response')
const app = express()
const port = 3000 //local host 3000

app.get ('/', (req, resp) =>{
    res.send("Hola a todos mis amigos")
})

app.listen(port, ()=>{
    console.log("Server Listo")
})