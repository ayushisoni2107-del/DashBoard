import React from "react";
import SideMenu from "../DashBoard/SideMenu";
import Searchs from "../DashBoard/Search";
import NewProduct from "../Product/New/NewProduct"

export default function ProductPage() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 ml-64">
        <Searchs />
        <main className="mt-16 p-6 bg-gray-50 min-h-screen">
          <NewProduct />
        </main>
      </div>
    </div>
  );
}