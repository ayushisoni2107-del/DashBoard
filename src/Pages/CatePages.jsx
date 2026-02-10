import React from "react";
import SideMenu from "../DashBoard/SideMenu";
import Searchs from "../DashBoard/Search";
import Cate from "../Customize/Cate/Cate"
function DashB() {
  return (
    <>
      <div className="flex">
        <SideMenu />
        <div className="flex-1 ml-64">
          <Searchs />
          <main className="mt-16 p-6 bg-gray-50 min-h-screen">
            <Cate />
          </main>
        </div>
      </div>
    </>
  );
} export default DashB