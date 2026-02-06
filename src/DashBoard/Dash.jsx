import React from "react";
import SideMenu from "./SideMenu"
import Search from "./Search";
import Dashboard from "./DashBoard";

function Dash() {
  return (
    <>
      <div className="flex">

        {/* Sidebar */}
        <SideMenu />

        {/* Right Section */}
        <div className="flex-1 ml-64">

          {/* Top Bar */}
          <Search />

          {/* Page Content */}
          <main className="mt-16 p-6 bg-gray-50 min-h-screen">
            <Dashboard />
          </main>

        </div>

      </div>
    </>
  );
} export default Dash