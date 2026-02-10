import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import DashB from './Pages/DashB';
import NavBarPage from './Pages/NavBarPage';
import CatePages from "./Pages/CatePages";
import SliderPage from './Pages/SliderPage';
import SectionPage from './Pages/SectionPage';
import ProductPage from "./Pages/ProductPage";
import ViewProductPage from './Pages/ViewProductPage';
import InventoryPage from './Pages/InventoryPage';
import CategoryPage from "./Pages/CategoryPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashB />} />
        <Route path="/dashboard" element={<DashB />} />
        <Route path="/navbarpage" element={<NavBarPage />} />
        <Route path="/catepages" element={<CatePages />} />
        <Route path="/sliderpage" element={<SliderPage />} />
        <Route path="/sectionpage" element={<SectionPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/viewproductpage" element={<ViewProductPage />} />
        <Route path="/inventorypage" element={<InventoryPage />} />
        <Route path="/categorypage" element={<CategoryPage />} />
      </Routes>
    </>
  )
} export default App;