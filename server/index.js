const express= require("express")
const app= express()
const http =require("http")
const cors=require("cors")
const {Server} = require("socket.io")

const server = http.createServer(app)
app.use(cors())

const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ["GET", "POST"]
    }
})

app.get("/", (req, res)=>{
    res.send("Hello world")
})

io.on("connection", (socket)=>{
    console.log("user connected with id,"+ socket.id)
})
server.listen(3000, ()=>{
    console.log("server run on port 3000")
})