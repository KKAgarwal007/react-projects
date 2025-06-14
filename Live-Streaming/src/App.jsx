import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Room from './pages/Room.jsx'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/room/:roomId" element={<Room/>} />
    </Routes>
  )
}

export default App