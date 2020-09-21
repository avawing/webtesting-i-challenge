const express = require('express')

const server = express()

server.use(express.json())

const port = process.env.PORT || 7777
server.listen(port, ()=>{console.log(`Server is Listening ${port}`)})