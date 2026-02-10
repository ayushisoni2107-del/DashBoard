import React, { useState } from "react";
import {
  LayoutGrid,
  Sliders,
  ChevronDown,
  Box,
  Users,
  ShoppingBag,
  Percent,
  User,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

function SideMenu() {
  // Dropdown states
  const [openCustomize, setOpenCustomize] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  // Active item state (ONLY THIS)
  const [activeItem, setActiveItem] = useState("");

  const navigate = useNavigate();

  // Common style
  const menuClass = (name) =>
    `flex items-center gap-3 w-full px-4 py-2 rounded-lg transition
     ${activeItem === name
      ? "bg-orange-500 text-white"
      : "hover:bg-gray-100 text-gray-600"
    }`;

  const subMenuClass = (name) =>
    `block px-2 py-1 rounded transition
     ${activeItem === name
      ? "bg-orange-100 text-orange-600 font-medium"
      : "hover:bg-gray-100 text-gray-500"
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-sm fixed left-0 top-0 flex flex-col">

      <div className="flex items-center justify-center px-6 py-5">
        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
          TWB
        </div>
      </div>


      <div className="flex-1 px-4 py-6 space-y-2 text-sm overflow-y-auto">
        <button
          onClick={() => {
            navigate("/dashboard");
            setActiveItem("dashboard");
          }}
          className={menuClass("dashboard")}>
          <LayoutGrid size={18} />
          Dashboard
        </button>

        <button
          onClick={() => {
            setOpenCustomize(!openCustomize);
            setActiveItem("customize");
          }}
          className={menuClass("customize")} >
          <div className="flex items-center gap-3">
            <Sliders size={18} />
            Customize
          </div>
          <ChevronDown
            size={16}
            className={`${openCustomize ? "rotate-180" : ""} transition`} />
        </button>

        {openCustomize && (
          <div className="ml-8 space-y-2">
            <Link
              to="/navbarpage"
              onClick={() => setActiveItem("navbar")}
              className={subMenuClass("navbar")}>
              Navbar
            </Link>

            <Link
              to="/sliderpage"
              onClick={() => setActiveItem("sliders")}
              className={subMenuClass("sliders")} >
              Sliders
            </Link>

            <Link
              to="/sectionpage"
              onClick={() => setActiveItem("sections")}
              className={subMenuClass("sections")} >
              Sections
            </Link>

            <div
              onClick={() => setActiveItem("review")}
              className={subMenuClass("review")}>
              Review
            </div>

            <Link
              to="/catepages"
              onClick={() => setActiveItem("category")}
              className={subMenuClass("category")}>
              Category
            </Link>
          </div>
        )}

        <button
          onClick={() => {
            setOpenProducts(!openProducts);
            setActiveItem("products");
          }}
          className={menuClass("products")} >
          <Box size={18} />
          Products
          <ChevronDown
            size={16}
            className={`${openProducts ? "rotate-180" : ""} transition`} />
        </button>

        {openProducts && (
          <div className="ml-8 space-y-2">
            <div
              onClick={() => setActiveItem("add-product")}
              className={subMenuClass("add-product")}>
              Add Product
            </div>

            <div
              onClick={() => setActiveItem("view-product")}
              className={subMenuClass("view-product")}>
              View Product
            </div>

            <div
              onClick={() => setActiveItem("inventory")}
              className={subMenuClass("inventory")} >
              Inventory
            </div>

            <div
              onClick={() => setActiveItem("product-category")}
              className={subMenuClass("product-category")}>
              Category
            </div>
          </div>
        )}

        <div
          onClick={() => setActiveItem("customers")}
          className={menuClass("customers")} >
          <User size={18} />
          Customers
        </div>

        <button
          onClick={() => {
            setOpenOrders(!openOrders);
            setActiveItem("orders");
          }}
          className={menuClass("orders")} >
          <ShoppingBag size={18} />
          Orders
          <ChevronDown
            size={16}
            className={`${openOrders ? "rotate-180" : ""} transition`} />
        </button>

        {openOrders && (
          <div className="ml-8 space-y-2">
            <div
              onClick={() => setActiveItem("all-orders")}
              className={subMenuClass("all-orders")}>
              All Orders
            </div>

            <div
              onClick={() => setActiveItem("draft")}
              className={subMenuClass("draft")}>
              Draft
            </div>

            <div
              onClick={() => setActiveItem("abandoned")}
              className={subMenuClass("abandoned")}>
              Abandoned Checkouts
            </div>
          </div>
        )}

        <div
          onClick={() => setActiveItem("discounts")}
          className={menuClass("discounts")} >
          <Percent size={18} />
          Discounts
        </div>

        <div
          onClick={() => setActiveItem("users")}
          className={menuClass("users")}>
          <Users size={18} />
          Users & Permission
        </div>
      </div>
    </div>
  );
}
export default SideMenu;