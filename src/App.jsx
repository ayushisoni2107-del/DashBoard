import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import DashB from './Pages/DashB';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashB />} />
        <Route path="/dashboard" element={<DashB />} />
      </Routes>
    </>
  )
} export default App