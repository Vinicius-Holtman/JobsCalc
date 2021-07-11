const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// mudar a localizacao da pasta views
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(2000, () => console.log('rodando'))