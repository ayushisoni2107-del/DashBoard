import React from "react";
import { Search } from "lucide-react";

export default function Category() {

  const data = [
    {
      id: 1,
      products: 20,
      status: "Active",
    },
    {
      id: 2,
      products: 20,
      status: "Draft",
    },
    {
      id: 3,
      products: 30,
      status: "Active",
    },
    {
      id: 4,
      products: 35,
      status: "Draft",
    },
    {
      id: 5,
      products: 20,
      status: "Active",
    },
    {
      id: 6,
      products: 13,
      status: "Draft",
    },
    {
      id: 7,
      products: 22,
      status: "Active",
    },
    {
      id: 8,
      products: 12,
      status: "Active",
    },
  ];


  const getStatusStyle = (status) => {

    if (status === "Active") {
      return "bg-green-100 text-green-600";
    }

    if (status === "Draft") {
      return "bg-orange-100 text-orange-500";
    }

    return "";
  };


  return (
    <div className="bg-white rounded-xl shadow p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">


        {/* Title */}
        <h2 className="text-xl font-semibold">
          Categories
        </h2>


        {/* Right Controls */}
        <div className="flex items-center gap-4">


          {/* Search */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search here..."
              className="outline-none text-sm w-48"
            />

          </div>


          {/* Add Button */}
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">

            Add new Category

          </button>

        </div>

      </div>



      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">


          {/* Head */}
          <thead>

            <tr className="border-b border-gray-400 text-gray-600">

              <th className="py-3 text-left">Sr.</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">No. of Products</th>
              <th className="py-3 text-left">Occasion Type</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Date & Time</th>
              <th className="py-3 text-left">Display on website</th>
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


                {/* Category */}
                <td className="py-5 flex items-center gap-4">

                  <div className="w-12 h-12 bg-gray-300 rounded-md" />

                  <span className="text-gray-700 font-medium">
                    Category Name
                  </span>

                </td>


                {/* Products */}
                <td className="py-5 text-gray-600">
                  {item.products}
                </td>


                {/* Occasion */}
                <td className="py-5 text-gray-600 leading-tight">

                  Festive
                  <br />
                  Wear

                </td>


                {/* Status */}
                <td className="py-5">

                  <span
                    className={`px-4 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}
                  >
                    {item.status}
                  </span>

                </td>


                {/* Date */}
                <td className="py-5 text-gray-600 text-sm">

                  22/06/2025&nbsp; Sun
                  <br />
                  11:25 AM

                </td>


                {/* Toggle */}
                <td className="py-5">

                  <div className="flex items-center gap-2 text-gray-600 text-sm">

                    On:

                    <label className="relative inline-flex items-center cursor-pointer">

                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />

                      <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500
                      after:content-[''] after:absolute after:top-0.5 after:left-0.5
                      after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all
                      peer-checked:after:translate-x-full" />

                    </label>

                  </div>

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
