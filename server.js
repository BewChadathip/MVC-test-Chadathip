//library express of node js
const express = require(`express`)
const path = require(`path`)
const router = require('./routesAndControl/router')
const server = express()

server.set('views', path.join(__dirname, 'view'))
server.set('view engine', 'ejs')

server.use(express.urlencoded({extended:false}))
server.use(router)

//server listen
server.listen(3000,()=>{
    console.log("Server Start on port 3000")
})