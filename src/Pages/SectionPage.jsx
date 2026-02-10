import React from "react";
import SideMenu from "../DashBoard/SideMenu";
import Searchs from "../DashBoard/Search";
import SectionCard from "../Customize/Section/SectionCard";
import SelectedProducts from "../Customize/Section/SelectedProducts";

export default function SectionPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f8fb]">
      {/* Sidebar */}
      <SideMenu />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <Searchs />

        <div className="pt-20 p-3 sm:p-4 md:p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 xl:grid-cols-[360px_1fr]">

            {/* Left Section */}
            <div className="w-full">
              <SectionCard />
            </div>

            {/* Right Section */}
            <div className="w-full">
              <SelectedProducts />
            </div>

          </div>
        </div>
      </div>
    </div>
  );

}