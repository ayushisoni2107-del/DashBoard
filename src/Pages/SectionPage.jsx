import React from "react";
import SideMenu from "../DashBoard/SideMenu";
import Searchs from "../DashBoard/Search";
import SectionCard from "../Customize/Section/SectionCard";
import SelectedProducts from "../Customize/Section/SelectedProducts";

export default function SectionPage() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 ml-64">
        <Searchs />
        <main className="mt-16 p-6 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6">
            <div className="w-full">
              <SectionCard />
            </div>
            <div className="w-full">
              <SelectedProducts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}