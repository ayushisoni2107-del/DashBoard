import React, { useState } from "react";
import { LayoutGrid, Sliders, ChevronDown, Box, Users, ShoppingBag, Percent, User, Link as LinkIcon, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SideMenu() {

  // Dropdown states
  const [openCustomize, setOpenCustomize] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const navigate = useNavigate();

  // Active menu state
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Common button style
  const menuClass = (name) =>
    `flex items-center justify-between w-full px-4 py-2 rounded-lg transition
    ${activeMenu === name
      ? "bg-orange-500 text-white"
      : "hover:bg-gray-100 text-gray-600"
    }`;
  const singleMenuClass = (name) =>
    `flex items-center gap-3 w-full px-4 py-3 rounded-lg transition
   ${activeMenu === name
      ? "bg-orange-500 text-white font-medium"
      : "hover:bg-gray-100 text-gray-600"}`;

  return (
    <div className="w-64 h-screen bg-white shadow-sm fixed left-0 top-0 flex flex-col">

      {/* Logo */}
      <div className="flex items-center justify-center px-6 py-5">
        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
          TWB
        </div>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 px-4 py-6 space-y-2 text-sm overflow-y-auto scrollbar-hide">

        {/*  DASHBOARD */}
        <button
          onClick={() => {
            setActiveMenu("dashboard");
            navigate("/dashboard");
          }}
          className={singleMenuClass("dashboard")}
        >
          <div className="flex items-center gap-3">
            <LayoutGrid size={18} />
            Dashboard
          </div>
        </button>

        {/* CUSTOMIZE  */}
        <button
          onClick={() => {
            setOpenCustomize(!openCustomize);
            setActiveMenu("customize");
          }}
          className={menuClass("customize")}
        >
          <div className="flex items-center gap-3">
            <Sliders size={18} />
            Customize
          </div>

          <ChevronDown
            size={16}
            className={`${openCustomize ? "rotate-180" : ""} transition`}
          />
        </button>

        {openCustomize && (
          <div className="ml-8 space-y-2 text-gray-500">
            <Link
              to="/navbarpage"
              className="hover:text-black cursor-pointer block">
              Navbar
            </Link>
            <div className="hover:text-black cursor-pointer">Sliders</div>
            <div className="hover:text-black cursor-pointer">Sections</div>
            <div className="hover:text-black cursor-pointer">Review</div>
            <Link
              to="/catepages"
              className="hover:text-black cursor-pointer block">
              Category
            </Link>
          </div>
        )}

        {/* PRODUCTS */}
        <button
          onClick={() => {
            setOpenProducts(!openProducts);
            setActiveMenu("products");
          }}
          className={menuClass("products")}
        >
          <div className="flex items-center gap-3">
            <Box size={18} />
            Products
          </div>

          <ChevronDown
            size={16}
            className={`${openProducts ? "rotate-180" : ""} transition`}
          />
        </button>

        {openProducts && (
          <div className="ml-8 space-y-2 text-gray-500">
            <div className="hover:text-black cursor-pointer">Add Product</div>
            <div className="hover:text-black cursor-pointer">View Product</div>
            <div className="hover:text-black cursor-pointer">Inventory</div>
            <div className="hover:text-black cursor-pointer">Category</div>
          </div>
        )}

        {/* CUSTOMERS*/}
        <div
          onClick={() => setActiveMenu("customers")}
          className={singleMenuClass("customers")}
        >
          <User size={18} />
          Customers
        </div>

        <button
          onClick={() => {
            setOpenOrders(!openOrders);
            setActiveMenu("orders");
          }}
          className={menuClass("orders")}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} />
            Orders
          </div>

          <ChevronDown
            size={16}
            className={`${openOrders ? "rotate-180" : ""} transition`}
          />
        </button>

        {openOrders && (
          <div className="ml-8 space-y-2 text-gray-500">
            <div className="hover:text-black cursor-pointer">All Orders</div>
            <div className="hover:text-black cursor-pointer">Draft</div>
            <div className="hover:text-black cursor-pointer">
              Abandoned Checkouts
            </div>
          </div>
        )}


        <div
          onClick={() => setActiveMenu("discounts")}
          className={singleMenuClass("discounts")}
        >
          <Percent size={18} />
          Discounts
        </div>


        <div
          onClick={() => setActiveMenu("users")}
          className={singleMenuClass("users")}
        >
          <Users size={18} />
          Users & Permission
        </div>

      </div>
    </div>
  );
}

export default SideMenu;
