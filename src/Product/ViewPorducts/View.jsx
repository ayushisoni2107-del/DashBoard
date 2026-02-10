import React from "react";

function View() {
  const products = [
    { id: 1, stock: "50 in stock", status: "Active" },
    { id: 2, stock: "20 in stock", status: "Draft" },
    { id: 3, stock: "200 in stock", status: "Active" },
    { id: 4, stock: "5 in stock", status: "Draft" },
    { id: 5, stock: "55 in stock", status: "Active" },
    { id: 6, stock: "60 in stock", status: "Draft" },
    { id: 7, stock: "60 in stock", status: "Active" },
    { id: 8, stock: "60 in stock", status: "Active" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-semibold">Products</h2>

        <div className="flex gap-4">

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-48"
            />
          </div>

          {/* Filter */}
          <select className="border rounded-lg px-4 py-2 text-sm outline-none">
            <option>All</option>
            <option>Active</option>
            <option>Draft</option>
          </select>

        </div>
      </div>


      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* Head */}
          <thead>
            <tr className="border-b border-gray-100 text-gray-500">

              <th className="py-3 text-left">Sr.</th>
              <th className="py-3 text-left">Product</th>
              <th className="py-3 text-left">Inventory</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Date & Time</th>
              <th className="py-3 text-left">Display</th>
              <th className="py-3 text-left">Action</th>

            </tr>
          </thead>


          {/* Body */}
          <tbody>

            {products.map((item) => (

              <tr key={item.id} className="border-b border-gray-100">

                {/* Sr */}
                <td className="py-4">{item.id}</td>

                {/* Product */}
                <td className="py-4 flex items-center gap-3">

                  <div className="w-12 h-12 bg-gray-300 rounded-md" />

                  <span className="font-medium">
                    Product Name
                  </span>

                </td>

                {/* Inventory */}
                <td className="py-4">{item.stock}</td>

                {/* Category */}
                <td className="py-4">Dress</td>

                {/* Status */}
                <td className="py-4">

                  {item.status === "Active" ? (

                    <span className="px-3 py-1 text-green-600 bg-green-100 rounded-full text-xs">
                      Active
                    </span>

                  ) : (

                    <span className="px-3 py-1 text-orange-500 bg-orange-100 rounded-full text-xs">
                      Draft
                    </span>

                  )}

                </td>

                {/* Date */}
                <td className="py-4 text-gray-600">

                  22/06/2025 <br />
                  <span className="text-xs">11:25 AM</span>

                </td>

                {/* Toggle */}
                <td className="py-4">

                  <div className="flex items-center gap-2">

                    <span>On:</span>

                    <div className="w-10 h-5 bg-green-500 rounded-full relative">

                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-0.5" />

                    </div>

                  </div>

                </td>

                {/* Actions */}
                <td className="py-4 flex gap-2">

                  <button className="px-3 py-1 text-orange-500 border border-orange-300 rounded text-xs">
                    View
                  </button>

                  <button className="px-3 py-1 text-green-600 border border-green-300 rounded text-xs">
                    Edit
                  </button>

                  <button className="px-3 py-1 text-red-500 border border-red-300 rounded text-xs">
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

export default View;
