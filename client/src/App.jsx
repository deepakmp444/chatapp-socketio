import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import './App.css'
function App() {

  // const socket = useMemo(() => io("http://localhost:3000"), []);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("connected", socket.id)
  //   })

  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
