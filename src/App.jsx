import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import DashB from './Pages/DashB';
import NavBarPage from './Pages/NavBarPage';
import CatePages from "./Pages/CatePages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashB />} />
        <Route path="/dashboard" element={<DashB />} />
        <Route path="/navbarpage" element={<NavBarPage />} />
        <Route path="/catepages" element={<CatePages />} />
      </Routes>
    </>
  )
} export default App;