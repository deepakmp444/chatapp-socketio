import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors'
const app = express()
const httpServer = createServer(app);

const PORT = 3000
app.use(cors())

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173"
    },
    credentials: true
});

io.on("connection", (socket) => {
    // console.log("socket.io connected")
    console.log("connection on:", socket.id)
    // socket.broadcast.emit("welcome", `Welcome ID: ${socket.id}`)
    socket.on("message", (message, roomName) => {
        console.log('roomName:', roomName)
        // console.log("message:", message)
        // io.emit("recieved-message", message)
        // socket.broadcast.emit("recieved-message", message)
        io.to(roomName).emit("recieved-message", message)
    })

    socket.on("join-group", (data) => {
        console.log('data:', data)
        socket.join(data)
    })

    socket.on("disconnect", () => {
        console.log(`Disconnected :${socket.id}`)
    })
});

httpServer.listen(PORT, () => {
    console.log("server running:", PORT);
})