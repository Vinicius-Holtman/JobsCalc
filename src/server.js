const express = require("express")
const Server = express()

server.use(express.static("public"))

Server.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})


Server.listen(2000, () => console.log('rodando'))