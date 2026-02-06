import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Dash from './DashBoard/Dash'
import SideMenu from './DashBoard/SideMenu';
import Dashboard from './DashBoard/DashBoard';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/SideMenu" element={<SideMenu />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
} export default App