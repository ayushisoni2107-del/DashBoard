import React from "react";
import { Search, Bell } from "lucide-react";

function Searchs() {
  return (
    <div className="fixed left-64 right-0 top-0 h-16 bg-white  flex items-center justify-between px-6 z-40">

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Admin Info */}
        <div className="flex items-center gap-3">

          {/* Name */}
          <div className="text-sm leading-tight">
            <div className="font-medium">Admin User</div>
            <div className="text-gray-500 text-xs">Admin</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Searchs;
