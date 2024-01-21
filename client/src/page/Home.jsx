import { useState, useEffect, useMemo } from "react"
import { io } from "socket.io-client";

function Home() {
  const [roomName, setRoomName] = useState("")
  const [userId, setUserId] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [groupJoin, setGroupJoin] = useState("")

  const socket = useMemo(() => io("http://localhost:3000"), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id)
      setUserId(socket.id)
    })
    socket.on("recieved-message", (data) => {
      console.log('data:', data)
      setMessages((messages) => [...messages, data])
    })

    return () => {
      socket.disconnect()
    }
  }, [])


  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", message, roomName)
    // setMessage("")
  }

  const handleJoinGroup = (e) => {
    e.preventDefault();
    socket.emit("join-group", groupJoin)
  }

  return (
    <div>
      <p>{userId}</p>
      <form onSubmit={handleJoinGroup}>
        <input type="text" value={groupJoin} placeholder="Join group" onChange={(e) => setGroupJoin(e.target.value)} />
        <button type="submit">join group</button>
      </form>
      <form onSubmit={handleSendMessage}>
        <input type="text" placeholder="roomName" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        <input type="text" placeholder="User ID" value={userId} disabled />
        <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      {messages ? <div>
        {messages.map((message, index) => {
          return (
            <div key={index} >{message}</div>
          )
        })}
      </div> : null}
    </div>
  )
}

export default Home