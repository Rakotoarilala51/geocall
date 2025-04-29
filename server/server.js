const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
const server=http.createServer(app)
app.use(cors)

const io = new Server(server, {
    cors:{
        origin:'*',
        methods: ["GET", "POST"]
    },
})

io.on("connection", (socket)=>{
    console.log("client connected: "+socket.id)

    socket.on("disconnect", ()=>{
        console.log("user disconnected "+socket.id)
    })
})

app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.listen(3000, ()=>{
    console.log("server blablabla on port 3000")
})