import React from "react";
import { Search } from "lucide-react";

export default function Inventory() {

  const data = [
    {
      id: 1,
      stock: "50 in stock",
      status: "in Stock",
      sold: 4573,
      returnRate: "0%",
    },
    {
      id: 2,
      stock: "20 in stock",
      status: "low Stock",
      sold: 573,
      returnRate: "2%",
    },
    {
      id: 3,
      stock: "200 in stock",
      status: "out of Stock",
      sold: 2573,
      returnRate: "0%",
    },
    {
      id: 4,
      stock: "5 in stock",
      status: "low Stock",
      sold: 3573,
      returnRate: "0%",
    },
    {
      id: 5,
      stock: "55 in stock",
      status: "Active",
      sold: 4573,
      returnRate: "0%",
    },
    {
      id: 6,
      stock: "60 in stock",
      status: "out of Stock",
      sold: 3573,
      returnRate: "0%",
    },
    {
      id: 7,
      stock: "60 in stock",
      status: "Active",
      sold: 1573,
      returnRate: "0%",
    },
    {
      id: 8,
      stock: "60 in stock",
      status: "low Stock",
      sold: 8573,
      returnRate: "0%",
    },
  ];


  const getStatusStyle = (status) => {

    if (status === "in Stock" || status === "Active") {
      return "bg-green-100 text-green-600";
    }

    if (status === "low Stock") {
      return "bg-orange-100 text-orange-500";
    }

    if (status === "out of Stock") {
      return "bg-red-100 text-red-500";
    }

    return "";
  };


  return (
    <div className="bg-white rounded-xl shadow p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-semibold">
          Inventory
        </h2>


        <div className="flex gap-4">

          {/* Search */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">

            <Search size={18} className="text-blue-500" />

            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-48"
            />

          </div>


          {/* Filter */}
          <select className="bg-gray-100 px-5 py-2 rounded-lg text-sm outline-none">

            <option>All</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>

          </select>

        </div>

      </div>



      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* Head */}
          <thead>

            <tr className="border-b border-gray-400 text-gray-600">

              <th className="py-3 text-left">Sr.</th>
              <th className="py-3 text-left">Product</th>
              <th className="py-3 text-left">Inventory</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Stock Status</th>
              <th className="py-3 text-left">Total Units Sold</th>
              <th className="py-3 text-left">Return Rate (%)</th>
              <th className="py-3 text-left">Action</th>

            </tr>

          </thead>



          {/* Body */}
          <tbody>

            {data.map((item) => (

              <tr key={item.id} className="border-b border-gray-400">

                {/* Sr */}
                <td className="py-5 text-gray-600">
                  {item.id}
                </td>


                {/* Product */}
                <td className="py-5 flex items-center gap-4">

                  <div className="w-12 h-12 bg-gray-300 rounded-md" />

                  <span className="text-gray-700 font-medium">
                    Product Name
                  </span>

                </td>


                {/* Inventory */}
                <td className="py-5 text-gray-600">
                  {item.stock}
                </td>


                {/* Category */}
                <td className="py-5 text-gray-600">
                  Dress
                </td>


                {/* Status */}
                <td className="py-5">

                  <span
                    className={`px-4 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}
                  >
                    {item.status}
                  </span>

                </td>


                {/* Sold */}
                <td className="py-5 text-gray-600">
                  {item.sold}
                </td>


                {/* Return */}
                <td className="py-5 text-gray-600">
                  {item.returnRate}
                </td>


                {/* Action */}
                <td className="py-5 flex gap-2">

                  <button className="px-3 py-1 text-orange-500 border border-orange-300 rounded text-xs bg-orange-50">
                    View
                  </button>

                  <button className="px-3 py-1 text-green-600 border border-green-300 rounded text-xs bg-green-50">
                    Edit
                  </button>

                  <button className="px-3 py-1 text-red-500 border border-red-300 rounded text-xs bg-red-50">
                    🗑
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
